import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const baseUrl = 'https://www.mccaigs.ai';
  const blogDir = path.join(process.cwd(), 'content/blog');

  if (!fs.existsSync(blogDir)) {
    return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset></urlset>', {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
  }

  const files = fs.readdirSync(blogDir);
  const now = new Date();
  const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

  // Parse all blog posts and filter for recent ones (last 48 hours for Top Stories eligibility)
  const posts = files
    .filter((file) => file.endsWith('.mdx') && file !== 'template.mdx')
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || slug.replace(/-/g, ' '),
        date: data.date,
        tags: data.tags || [],
      };
    })
    .filter((post) => {
      // Include all posts for news sitemap (Google News considers last 2 years)
      // For Top Stories, only last 48 hours matter
      const postDate = new Date(post.date);
      const twoYearsAgo = new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000);
      return postDate >= twoYearsAgo;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Generate news sitemap XML with Google News namespace
  const urls = posts
    .map((post) => {
      const pubDate = new Date(post.date).toISOString();
      const isRecent = new Date(post.date) >= twoDaysAgo;
      
      return `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>McCaigs AI</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title><![CDATA[${post.title}]]></news:title>${
        post.tags.length > 0
          ? `
      <news:keywords>${post.tags.join(', ')}</news:keywords>`
          : ''
      }
    </news:news>
    <lastmod>${pubDate}</lastmod>
    <changefreq>${isRecent ? 'hourly' : 'daily'}</changefreq>
    <priority>${isRecent ? '1.0' : '0.9'}</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
