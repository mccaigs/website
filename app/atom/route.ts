import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const siteUrl = 'https://www.mccaigs.ai';
  
  const feed = new Feed({
    title: 'McCaigs AI Blog',
    description: 'Insights, updates, and thought leadership from McCaigs AI. Privacy-first AI solutions for education and enterprise.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    image: `${siteUrl}/assets/logo-light.svg`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} McCaigs AI. All rights reserved.`,
    feedLinks: {
      rss: `${siteUrl}/rss`,
      atom: `${siteUrl}/atom`,
    },
    author: {
      name: 'McCaigs AI Team',
      email: 'hello@mccaigs.ai',
      link: siteUrl,
    },
  });

  // Read all blog posts
  const blogDir = path.join(process.cwd(), 'content/blog');
  
  if (!fs.existsSync(blogDir)) {
    return new Response(feed.atom1(), {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    });
  }

  const files = fs.readdirSync(blogDir);
  const posts = [];

  // Parse all MDX files
  for (const file of files) {
    if (file.endsWith('.mdx') && file !== 'template.mdx') {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      posts.push({
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        image: data.image,
        tags: data.tags || [],
      });
    }
  }

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Add posts to feed
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.excerpt,
      content: post.excerpt,
      author: [
        {
          name: post.author,
          email: 'hello@mccaigs.ai',
          link: siteUrl,
        },
      ],
      date: new Date(post.date),
      image: post.image,
      category: post.tags.map((tag: string) => ({ name: tag })),
    });
  });

  // Generate Atom 1.0 XML
  const atom = feed.atom1();

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
