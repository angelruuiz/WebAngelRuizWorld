const AI_BOTS = [
  'GPTBot',            // OpenAI — entrenamiento ChatGPT
  'OAI-SearchBot',     // OpenAI — búsqueda en ChatGPT
  'ChatGPT-User',      // OpenAI — navegación en vivo
  'ClaudeBot',         // Anthropic — entrenamiento Claude
  'Claude-Web',        // Anthropic — navegación en vivo
  'anthropic-ai',      // Anthropic
  'PerplexityBot',     // Perplexity — índice
  'Perplexity-User',   // Perplexity — navegación en vivo
  'Google-Extended',   // Google — Gemini
  'Applebot-Extended', // Apple Intelligence
  'meta-externalagent',// Meta AI
  'CCBot',             // Common Crawl (base de muchos LLM)
  'cohere-ai',
  'YouBot',
  'DuckAssistBot',
];

export default function robots() {
  return {
    rules: [
      // Crawlers de IA: acceso total al contenido público
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: ['/admin', '/api', '/almeria'],
      })),
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/almeria'],
      },
    ],
    sitemap: 'https://angelruiz.world/sitemap.xml',
  };
}
