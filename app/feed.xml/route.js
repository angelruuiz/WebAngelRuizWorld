import { getSortedPostsData } from '@/lib/blog';

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = getSortedPostsData();
  const siteUrl = 'https://angelruiz.world';
  const feedUrl = `${siteUrl}/feed.xml`;

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`;
      const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString();
      const title = escapeXml(post.title || '');
      const description = escapeXml(post.excerpt || '');
      const category = escapeXml(post.category || 'Magia y Eventos');

      return `    <item>
      <title>${title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
      <category>${category}</category>
    </item>`;
    })
    .join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ángel Ruiz | Blog de Magia y Eventos en Madrid</title>
    <link>${siteUrl}/blog</link>
    <description>Guías, consejos y artículos especializados en entretenimiento, magia para bodas y eventos de empresa en Madrid por Ángel Ruiz.</description>
    <language>es-ES</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate',
    },
  });
}
