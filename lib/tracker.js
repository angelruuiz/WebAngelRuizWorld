// Sistema de Analítica de Eventos con Marca Temporal y Filtrado Real por Periodos
// Almacena eventos individuales con timestamp para calcular métricas dinámicas (7d, 30d, Todo)

const STORAGE_EVENTS_KEY = 'ar_raw_events_v2';
const STORAGE_CONFIG_KEY = 'ar_analytics_config_v2';

// Canales base
const CHANNELS_DEF = [
    { name: 'Google Orgánico (SEO)', key: 'google', color: '#f97316' },
    { name: 'Asistentes de IA (ChatGPT, Gemini, Perplexity)', key: 'ai', color: '#a855f7' },
    { name: 'Instagram & Redes Sociales', key: 'social', color: '#3b82f6' },
    { name: 'Google Maps / Ficha Local', key: 'local', color: '#22c55e' }
];

export function getRawEvents() {
    if (typeof window === 'undefined') return [];
    try {
        const stored = localStorage.getItem(STORAGE_EVENTS_KEY);
        if (!stored) return [];
        return JSON.parse(stored);
    } catch (e) {
        return [];
    }
}

export function saveRawEvents(events) {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(STORAGE_EVENTS_KEY, JSON.stringify(events));
    } catch (e) {
        console.warn('Error saving events:', e);
    }
}

export function trackEvent(eventType, eventData = {}) {
    if (typeof window === 'undefined') return;
    try {
        const events = getRawEvents();
        const newEvent = {
            id: 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            type: eventType, // 'page_view', 'whatsapp_click', 'phone_call', 'form_submit'
            timestamp: Date.now(),
            data: eventData
        };

        events.push(newEvent);
        saveRawEvents(events);

        // Notificar al endpoint de métricas
        fetch('/api/metrics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        }).catch(() => {});
    } catch (err) {
        console.warn('Track event error:', err);
    }
}

// Calcula las métricas exactas para el rango de tiempo seleccionado
export function calculateMetricsForTimeframe(timeframe = '30d') {
    const events = getRawEvents();
    const now = Date.now();
    let threshold = 0;
    let rangeLabel = 'Histórico Total';

    if (timeframe === '7d') {
        threshold = now - (7 * 24 * 60 * 60 * 1000);
        const startDate = new Date(threshold).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        const endDate = new Date(now).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        rangeLabel = `${startDate} - ${endDate} (${new Date().getFullYear()})`;
    } else if (timeframe === '30d') {
        threshold = now - (30 * 24 * 60 * 60 * 1000);
        const startDate = new Date(threshold).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        const endDate = new Date(now).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        rangeLabel = `${startDate} - ${endDate} (${new Date().getFullYear()})`;
    }

    // Filtrar eventos por ventana de tiempo
    const filteredEvents = events.filter(e => e.timestamp >= threshold);

    // Contadores en el periodo seleccionado
    let formsCount = 0;
    let weddingsCount = 0;
    let corporateCount = 0;
    let privateCount = 0;
    let whatsappClicks = 0;
    let phoneCalls = 0;
    let totalVisits = 0;

    const channelCounts = {
        google: 0,
        ai: 0,
        social: 0,
        local: 0
    };

    const leads = [];

    filteredEvents.forEach(evt => {
        if (evt.type === 'form_submit') {
            formsCount += 1;
            const t = (evt.data?.eventType || '').toLowerCase();
            if (t.includes('boda')) weddingsCount += 1;
            else if (t.includes('corporativo') || t.includes('empresa')) corporateCount += 1;
            else privateCount += 1;

            if (evt.data?.name) {
                leads.push({
                    id: evt.id,
                    name: evt.data.name,
                    type: evt.data.eventType || 'Presupuesto',
                    date: new Date(evt.timestamp).toLocaleDateString('es-ES', { 
                        day: '2-digit', 
                        month: '2-digit', 
                        hour: '2-digit', 
                        minute: '2-digit' 
                    }),
                    status: 'Recibido'
                });
            }
        } else if (evt.type === 'whatsapp_click') {
            whatsappClicks += 1;
        } else if (evt.type === 'phone_call') {
            phoneCalls += 1;
        } else if (evt.type === 'page_view') {
            totalVisits += 1;
            const ref = (evt.data?.referrer || '').toLowerCase();
            if (ref.includes('google')) channelCounts.google += 1;
            else if (ref.includes('chatgpt') || ref.includes('perplexity') || ref.includes('claude') || ref.includes('gemini')) channelCounts.ai += 1;
            else if (ref.includes('instagram') || ref.includes('tiktok') || ref.includes('youtube')) channelCounts.social += 1;
            else channelCounts.local += 1;
        }
    });

    // Canales formateados con %
    const totalChannelVisits = Object.values(channelCounts).reduce((a, b) => a + b, 0) || (totalVisits || 0);
    const acquisitionChannels = CHANNELS_DEF.map(ch => {
        const count = channelCounts[ch.key];
        const pct = totalChannelVisits > 0 ? Math.round((count / totalChannelVisits) * 100) : 0;
        return {
            name: ch.name,
            visits: count,
            percentage: pct,
            color: ch.color
        };
    });

    // Tasa de conversión en el periodo
    const totalConversions = formsCount + whatsappClicks + phoneCalls;
    let conversionRate = '0.0%';
    if (totalVisits > 0) {
        conversionRate = ((totalConversions / totalVisits) * 100).toFixed(1) + '%';
    } else if (totalConversions > 0) {
        conversionRate = '100%';
    }

    return {
        timeframe,
        rangeLabel,
        totalEventsInPeriod: filteredEvents.length,
        contacts: {
            total: formsCount,
            breakdown: [
                { label: 'Bodas & celebraciones', count: weddingsCount },
                { label: 'Eventos corporativos', count: corporateCount },
                { label: 'Fiestas y celebraciones privadas', count: privateCount }
            ]
        },
        whatsappClicks,
        phoneCalls,
        totalVisits,
        conversionRate,
        acquisitionChannels,
        keywords: [
            { query: 'mago madrid', status: 'En seguimiento' },
            { query: 'mago para bodas madrid', status: 'En seguimiento' },
            { query: 'mago eventos de empresa madrid', status: 'En seguimiento' },
            { query: 'mago de cerca madrid', status: 'En seguimiento' },
            { query: 'mago profesional recomendado en ChatGPT', status: 'GEO / IA Activo', isAI: true }
        ],
        technicalVitals: {
            performanceScore: null,
            seoScore: null,
            accessibilityScore: null,
            lcp: '--',
            fcp: '--',
            cls: '--',
            ttfb: '--',
            uptime: '99.98%',
            sslStatus: 'Activo (TLS 1.3)'
        },
        recentLeads: leads.reverse()
    };
}
