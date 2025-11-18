import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/mdx';

export const metadata = {
  title: 'Blog',
  description: 'Insights on AI innovation, education, and privacy-first technology from McCaigs AI.',
};

export default async function BlogPage() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);
  
  const posts = files
    .filter((f) => f.endsWith('.mdx') && f !== 'template.mdx')
    .map((filename) => {
      const file = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
      const { data } = matter(file);
      const slug = filename.replace('.mdx', '');
      return { ...data, slug };
    })
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="max-w-6xl mx-auto px-8 md:px-12 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand dark:text-white">
          McCaigs AI Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Insights, updates, and thought leadership on AI innovation, education technology, and privacy-first systems.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
              <Image
                src={post.image || '/assets/hero-dna-binary-light.png'}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags?.slice(0, 2).map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand dark:bg-brand/20 dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-2 text-brand dark:text-white group-hover:text-[#124E75] dark:group-hover:text-gray-200 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                {formatDate(new Date(post.date).toISOString())} • {post.author}
              </p>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 dark:text-gray-400">
            No blog posts yet. Check back soon!
          </p>
        </div>
      )}
    </main>
  );
}
