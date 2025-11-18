import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
}

export async function getMDXContent(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf-8');

  const { content, data } = matter(source);

  const renderedContent = await unified()
    .use(remarkParse)
    // remark/rehype plugins ship untyped ESM modules, so cast to satisfy TS
    .use(remarkGfm as unknown as any)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw as unknown as any)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings as unknown as any, { behavior: 'wrap' })
    .use(rehypeStringify)
    .process(content);

  // Return deterministic content with normalized date
  return { 
    content: renderedContent.toString(), 
    frontmatter: {
      ...(data as BlogPost),
      // Normalize date to ISO string for consistent SSR/client rendering
      date: data?.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    } as BlogPost
  };
}

export function getAllBlogSlugs() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);
  
  return files
    .filter((f) => f.endsWith('.mdx') && f !== 'template.mdx')
    .map((filename) => filename.replace('.mdx', ''));
}

// Deterministic date formatter for SSR consistency
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
