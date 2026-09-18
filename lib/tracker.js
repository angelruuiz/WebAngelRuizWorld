// Helper de analítica y registro de eventos reales para angelruiz.world
// Registra conversiones reales en cliente y sincroniza con localStorage y /api/metrics

const STORAGE_KEY = 'ar_analytics_data_v2';

export const DEFAULT_METRICS = {
    contacts: {
        total: 0,
        breakdown: [
            { label: 'Bodas & celebraciones', count: 0 },
            { label: 'Eventos corporativos', count: 0 },
            { label: 'Fiestas y celebraciones privadas', count: 0 }
        ]
    },
    whatsappClicks: 0,
    phoneCalls: 0,
    totalVisits: 0,
    conversionRate: '0.0%',
    sectorAverage: '1.8%',
    acquisitionChannels: [
        { name: 'Google Orgánico (SEO)', percentage: 0, visits: 0, color: '#f97316' },
        { name: 'Asistentes de IA (ChatGPT, Gemini, Perplexity)', percentage: 0, visits: 0, color: '#a855f7' },
        { name: 'Instagram & Redes Sociales', percentage: 0, visits: 0, color: '#3b82f6' },
        { name: 'Google Maps / Ficha Local', percentage: 0, visits: 0, color: '#22c55e' }
    ],
    keywords: [
        { query: 'mago madrid', status: 'Monitoreando', isAI: false },
        { query: 'mago para bodas madrid', status: 'Monitoreando', isAI: false },
        { query: 'mago eventos de empresa madrid', status: 'Monitoreando', isAI: false },
        { query: 'mago de cerca madrid', status: 'Monitoreando', isAI: false },
        { query: 'mago profesional en ChatGPT / IA', status: 'Monitoreando IA', isAI: true }
    ],
    technicalVitals: {
        performanceScore: null,
        seoScore: null,
        accessibilityScore: null,
        lcp: '--',
        fcp: '--',
        cls: '--',
        ttfb: '--',
        uptime: '99.9%',
        sslStatus: 'Activo (TLS 1.3)'
    },
    recentLeads: []
};

export function getLocalMetrics() {
    if (typeof window === 'undefined') return DEFAULT_METRICS;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_METRICS));
            return DEFAULT_METRICS;
        }
        return JSON.parse(stored);
    } catch (e) {
        return DEFAULT_METRICS;
    }
}

export function trackEvent(eventType, eventData = {}) {
    if (typeof window === 'undefined') return;
    try {
        const metrics = getLocalMetrics();
        if (eventType === 'whatsapp_click') {
            metrics.whatsappClicks = (metrics.whatsappClicks || 0) + 1;
        } else if (eventType === 'phone_call') {
            metrics.phoneCalls = (metrics.phoneCalls || 0) + 1;
        } else if (eventType === 'page_view') {
            metrics.totalVisits = (metrics.totalVisits || 0) + 1;
            
            // Detectar canal de adquisición real
            const ref = document.referrer.toLowerCase();
            if (ref.includes('google')) {
                metrics.acquisitionChannels[0].visits += 1;
            } else if (ref.includes('chatgpt') || ref.includes('openai') || ref.includes('perplexity') || ref.includes('claude') || ref.includes('gemini')) {
                metrics.acquisitionChannels[1].visits += 1;
            } else if (ref.includes('instagram') || ref.includes('tiktok') || ref.includes('facebook') || ref.includes('youtube')) {
                metrics.acquisitionChannels[2].visits += 1;
            } else {
                metrics.acquisitionChannels[3].visits += 1;
            }
            
            // Recalcular porcentajes
            const totalChVisits = metrics.acquisitionChannels.reduce((acc, c) => acc + c.visits, 0) || 1;
            metrics.acquisitionChannels.forEach(c => {
                c.percentage = Math.round((c.visits / totalChVisits) * 100);
            });
        } else if (eventType === 'form_submit') {
            metrics.contacts.total = (metrics.contacts.total || 0) + 1;
            const eventTypeName = eventData.eventType || 'Otro';
            const item = metrics.contacts.breakdown.find(b => b.label.toLowerCase().includes(eventTypeName.toLowerCase()));
            if (item) {
                item.count += 1;
            } else if (metrics.contacts.breakdown[0]) {
                metrics.contacts.breakdown[0].count += 1;
            }
            if (eventData.name) {
                metrics.recentLeads = [
                    {
                        id: Date.now(),
                        name: eventData.name,
                        type: eventTypeName,
                        date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
                        status: 'Nuevo'
                    },
                    ...(metrics.recentLeads || []).slice(0, 9)
                ];
            }
        }
        
        // Recalcular tasa de conversión
        if (metrics.totalVisits > 0) {
            const totalConversions = (metrics.contacts.total || 0) + (metrics.whatsappClicks || 0) + (metrics.phoneCalls || 0);
            metrics.conversionRate = ((totalConversions / metrics.totalVisits) * 100).toFixed(1) + '%';
        } else if ((metrics.contacts.total || 0) > 0 || (metrics.whatsappClicks || 0) > 0) {
            metrics.conversionRate = '100%';
        } else {
            metrics.conversionRate = '0.0%';
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(metrics));

        // Enviar evento a la API
        fetch('/api/metrics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ eventType, eventData, timestamp: new Date().toISOString() })
        }).catch(() => {});
    } catch (err) {
        console.warn('Track event error:', err);
    }
}
