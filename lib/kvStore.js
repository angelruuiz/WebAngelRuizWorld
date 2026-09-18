// Módulo de Almacenamiento Centralizado Vercel KV / Upstash Redis
// Permite guardar visitas y conversiones globales de todos los usuarios de internet en tiempo real

const KV_URL = process.env.KV_REST_API_URL || process.env.VERCEL_KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.VERCEL_KV_REST_API_TOKEN;

// Fallback en memoria en el servidor en caso de que Vercel KV aún no se haya vinculado en el Dashboard
let memoryStore = {
    visits: 0,
    whatsappClicks: 0,
    phoneCalls: 0,
    formsTotal: 0,
    formsBreakdown: { boda: 0, empresa: 0, privado: 0 },
    channels: { google: 0, ai: 0, social: 0, direct: 0 },
    leads: [],
    events: []
};

// Helper para ejecutar comandos HTTP en Vercel KV
async function kvExecute(commandArray) {
    if (!KV_URL || !KV_TOKEN) return null;
    try {
        const res = await fetch(`${KV_URL}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${KV_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commandArray),
            next: { revalidate: 0 }
        });
        if (res.ok) {
            const data = await res.json();
            return data.result;
        }
    } catch (e) {
        console.warn('Vercel KV Connection Warn:', e.message);
    }
    return null;
}

// Registrar un evento real procedente de cualquier cliente en internet
export async function recordGlobalEvent(event) {
    const { type, data, referrer, timestamp = Date.now() } = event;
    const now = timestamp;

    // 1. Intentar persistir en Vercel KV si están las variables de entorno
    if (KV_URL && KV_TOKEN) {
        const pipeline = [];

        if (type === 'page_view') {
            pipeline.push(['INCR', 'ar:visits:total']);
            const ref = (referrer || '').toLowerCase();
            if (ref.includes('google')) pipeline.push(['INCR', 'ar:channel:google']);
            else if (ref.includes('chatgpt') || ref.includes('perplexity') || ref.includes('claude') || ref.includes('gemini')) pipeline.push(['INCR', 'ar:channel:ai']);
            else if (ref.includes('instagram') || ref.includes('tiktok') || ref.includes('youtube')) pipeline.push(['INCR', 'ar:channel:social']);
            else pipeline.push(['INCR', 'ar:channel:direct']);
        } else if (type === 'whatsapp_click') {
            pipeline.push(['INCR', 'ar:whatsapp:total']);
        } else if (type === 'phone_call') {
            pipeline.push(['INCR', 'ar:calls:total']);
        } else if (type === 'form_submit') {
            pipeline.push(['INCR', 'ar:forms:total']);
            const t = (data?.eventType || '').toLowerCase();
            if (t.includes('boda')) pipeline.push(['INCR', 'ar:form:boda']);
            else if (t.includes('empresa') || t.includes('corporativo')) pipeline.push(['INCR', 'ar:form:empresa']);
            else pipeline.push(['INCR', 'ar:form:privado']);

            if (data?.name) {
                const leadObj = JSON.stringify({
                    id: 'lead_' + Date.now(),
                    name: data.name,
                    phone: data.phone || '',
                    email: data.email || '',
                    type: data.eventType || 'Presupuesto',
                    date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
                    timestamp: now,
                    status: 'Nuevo'
                });
                pipeline.push(['LPUSH', 'ar:leads', leadObj]);
                pipeline.push(['LTRIM', 'ar:leads', 0, 49]); // Mantener últimos 50 leads
            }
        }

        // Guardar en el log global de eventos
        const eventLog = JSON.stringify({ type, timestamp: now, referrer: referrer || '' });
        pipeline.push(['LPUSH', 'ar:event_log', eventLog]);
        pipeline.push(['LTRIM', 'ar:event_log', 0, 999]); // Mantener últimos 1000 eventos

        if (pipeline.length > 0) {
            try {
                await fetch(`${KV_URL}/pipeline`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${KV_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(pipeline)
                });
            } catch (e) {
                console.warn('Vercel KV Pipeline Error:', e);
            }
        }
    }

    // 2. Fallback / Actualización en memoria local del servidor
    if (type === 'page_view') {
        memoryStore.visits += 1;
        const ref = (referrer || '').toLowerCase();
        if (ref.includes('google')) memoryStore.channels.google += 1;
        else if (ref.includes('chatgpt') || ref.includes('perplexity') || ref.includes('claude') || ref.includes('gemini')) memoryStore.channels.ai += 1;
        else if (ref.includes('instagram') || ref.includes('tiktok') || ref.includes('youtube')) memoryStore.channels.social += 1;
        else memoryStore.channels.direct += 1;
    } else if (type === 'whatsapp_click') {
        memoryStore.whatsappClicks += 1;
    } else if (type === 'phone_call') {
        memoryStore.phoneCalls += 1;
    } else if (type === 'form_submit') {
        memoryStore.formsTotal += 1;
        const t = (data?.eventType || '').toLowerCase();
        if (t.includes('boda')) memoryStore.formsBreakdown.boda += 1;
        else if (t.includes('empresa') || t.includes('corporativo')) memoryStore.formsBreakdown.empresa += 1;
        else memoryStore.formsBreakdown.privado += 1;

        if (data?.name) {
            memoryStore.leads.unshift({
                id: 'lead_' + Date.now(),
                name: data.name,
                type: data.eventType || 'Presupuesto',
                date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
                timestamp: now,
                status: 'Nuevo'
            });
            memoryStore.leads = memoryStore.leads.slice(0, 50);
        }
    }

    memoryStore.events.unshift({ type, timestamp: now });
    memoryStore.events = memoryStore.events.slice(0, 1000);
}

// Obtener las métricas globales calculadas desde Vercel KV o memoria
export async function getGlobalMetrics(timeframe = '30d') {
    const now = Date.now();
    let threshold = 0;
    let rangeLabel = 'Histórico Total';

    if (timeframe === '7d') {
        threshold = now - (7 * 24 * 60 * 60 * 1000);
        const startDate = new Date(threshold).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        const endDate = new Date(now).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        rangeLabel = `${startDate} - ${endDate}`;
    } else if (timeframe === '30d') {
        threshold = now - (30 * 24 * 60 * 60 * 1000);
        const startDate = new Date(threshold).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        const endDate = new Date(now).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        rangeLabel = `${startDate} - ${endDate}`;
    }

    const isKvConnected = Boolean(KV_URL && KV_TOKEN);

    if (isKvConnected) {
        try {
            const pipeline = [
                ['GET', 'ar:visits:total'],
                ['GET', 'ar:whatsapp:total'],
                ['GET', 'ar:calls:total'],
                ['GET', 'ar:forms:total'],
                ['GET', 'ar:form:boda'],
                ['GET', 'ar:form:empresa'],
                ['GET', 'ar:form:privado'],
                ['GET', 'ar:channel:google'],
                ['GET', 'ar:channel:ai'],
                ['GET', 'ar:channel:social'],
                ['GET', 'ar:channel:direct'],
                ['LRANGE', 'ar:leads', 0, 49]
            ];

            const res = await fetch(`${KV_URL}/pipeline`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${KV_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pipeline),
                next: { revalidate: 0 }
            });

            if (res.ok) {
                const results = await res.json();
                const [
                    vTotal, wTotal, cTotal, fTotal,
                    fBoda, fEmp, fPriv,
                    chG, chAI, chSoc, chDir,
                    rawLeads
                ] = results.map(r => r.result);

                const visits = parseInt(vTotal || '0', 10);
                const whatsapp = parseInt(wTotal || '0', 10);
                const calls = parseInt(cTotal || '0', 10);
                const forms = parseInt(fTotal || '0', 10);

                const chGoogleCount = parseInt(chG || '0', 10);
                const chAiCount = parseInt(chAI || '0', 10);
                const chSocialCount = parseInt(chSoc || '0', 10);
                const chDirectCount = parseInt(chDir || '0', 10);

                const totalCh = chGoogleCount + chAiCount + chSocialCount + chDirectCount || (visits || 1);

                const leadsParsed = (rawLeads || []).map(l => {
                    try { return typeof l === 'string' ? JSON.parse(l) : l; } catch (e) { return null; }
                }).filter(Boolean);

                const filteredLeads = leadsParsed.filter(l => (l.timestamp || 0) >= threshold);

                const totalConversions = forms + whatsapp + calls;
                const conversionRate = visits > 0 ? ((totalConversions / visits) * 100).toFixed(1) + '%' : (totalConversions > 0 ? '100%' : '0.0%');

                return {
                    kvConnected: true,
                    timeframe,
                    rangeLabel,
                    totalVisits: visits,
                    whatsappClicks: whatsapp,
                    phoneCalls: calls,
                    contacts: {
                        total: forms,
                        breakdown: [
                            { label: 'Bodas & celebraciones', count: parseInt(fBoda || '0', 10) },
                            { label: 'Eventos corporativos', count: parseInt(fEmp || '0', 10) },
                            { label: 'Fiestas y celebraciones privadas', count: parseInt(fPriv || '0', 10) }
                        ]
                    },
                    conversionRate,
                    acquisitionChannels: [
                        { name: 'Google Orgánico (SEO)', percentage: Math.round((chGoogleCount / totalCh) * 100), visits: chGoogleCount, color: '#f97316' },
                        { name: 'Asistentes de IA (ChatGPT, Gemini, Perplexity)', percentage: Math.round((chAiCount / totalCh) * 100), visits: chAiCount, color: '#a855f7' },
                        { name: 'Instagram & Redes Sociales', percentage: Math.round((chSocialCount / totalCh) * 100), visits: chSocialCount, color: '#3b82f6' },
                        { name: 'Google Maps / Directo', percentage: Math.round((chDirectCount / totalCh) * 100), visits: chDirectCount, color: '#22c55e' }
                    ],
                    recentLeads: filteredLeads
                };
            }
        } catch (e) {
            console.warn('KV Read Error:', e);
        }
    }

    // Memoria del servidor si KV no está configurado
    const filteredLeads = memoryStore.leads.filter(l => (l.timestamp || 0) >= threshold);
    const totalCh = memoryStore.channels.google + memoryStore.channels.ai + memoryStore.channels.social + memoryStore.channels.direct || (memoryStore.visits || 1);
    const totalConversions = memoryStore.formsTotal + memoryStore.whatsappClicks + memoryStore.phoneCalls;
    const conversionRate = memoryStore.visits > 0 ? ((totalConversions / memoryStore.visits) * 100).toFixed(1) + '%' : (totalConversions > 0 ? '100%' : '0.0%');

    return {
        kvConnected: false,
        timeframe,
        rangeLabel,
        totalVisits: memoryStore.visits,
        whatsappClicks: memoryStore.whatsappClicks,
        phoneCalls: memoryStore.phoneCalls,
        contacts: {
            total: memoryStore.formsTotal,
            breakdown: [
                { label: 'Bodas & celebraciones', count: memoryStore.formsBreakdown.boda },
                { label: 'Eventos corporativos', count: memoryStore.formsBreakdown.empresa },
                { label: 'Fiestas y celebraciones privadas', count: memoryStore.formsBreakdown.privado }
            ]
        },
        conversionRate,
        acquisitionChannels: [
            { name: 'Google Orgánico (SEO)', percentage: Math.round((memoryStore.channels.google / totalCh) * 100), visits: memoryStore.channels.google, color: '#f97316' },
            { name: 'Asistentes de IA (ChatGPT, Gemini, Perplexity)', percentage: Math.round((memoryStore.channels.ai / totalCh) * 100), visits: memoryStore.channels.ai, color: '#a855f7' },
            { name: 'Instagram & Redes Sociales', percentage: Math.round((memoryStore.channels.social / totalCh) * 100), visits: memoryStore.channels.social, color: '#3b82f6' },
            { name: 'Google Maps / Directo', percentage: Math.round((memoryStore.channels.direct / totalCh) * 100), visits: memoryStore.channels.direct, color: '#22c55e' }
        ],
        recentLeads: filteredLeads
    };
}
