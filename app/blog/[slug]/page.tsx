import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { getMDXContent, getAllBlogSlugs, formatDate } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getMDXContent(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | McCaigs AI Blog',
      description: 'This blog post could not be found.',
    };
  }

  const { frontmatter } = post;
  const canonicalUrl = `https://www.mccaigs.ai/blog/${slug}`;

  return {
    title: `${frontmatter.title} | McCaigs AI Blog`,
    description: frontmatter.excerpt,
    keywords: frontmatter.tags?.join(', '),
    authors: [{ name: frontmatter.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      url: canonicalUrl,
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
      images: [
        {
          url: frontmatter.image,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: [frontmatter.image],
      creator: '@McCaigsAI',
    },
    other: {
      'news_keywords': frontmatter.tags?.join(', '),
      'googlebot-news': 'index, follow',
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getMDXContent(slug);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = post;

  // JSON-LD structured data for Google News and rich snippets
  const canonicalUrl = `https://www.mccaigs.ai/blog/${slug}`;
  
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    image: [frontmatter.image],
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      '@type': 'Person',
      name: frontmatter.author,
      url: 'https://www.mccaigs.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'McCaigs AI',
      url: 'https://www.mccaigs.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.mccaigs.ai/assets/logo-light.svg',
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    articleBody: frontmatter.excerpt,
    keywords: frontmatter.tags?.join(', '),
    articleSection: frontmatter.tags?.[0] || 'Technology',
    isAccessibleForFree: true,
    inLanguage: 'en-US',
  };

  return (
    <>
      {/* Canonical Link for Google News */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* JSON-LD Structured Data - NewsArticle for Google News/Discover */}
      <Script
        id="news-article-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: (() => {
            try {
              return JSON.stringify(newsArticleSchema);
            } catch (error) {
              console.error('Failed to serialize NewsArticle schema:', error);
              return '{}';
            }
          })()
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16">
      {/* Back link */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-brand dark:text-white hover:text-[#124E75] dark:hover:text-gray-300 mb-8 transition-colors font-medium"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      <article className="max-w-none">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-brand/10 text-brand dark:bg-brand/20 dark:text-white font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand dark:text-white leading-tight">
            {frontmatter.title}
          </h1>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-8">
            <time dateTime={frontmatter.date}>
              {formatDate(frontmatter.date)}
            </time>
            <span className="mx-2">•</span>
            <span>{frontmatter.author}</span>
          </div>

          {/* Featured image */}
          {frontmatter.image && (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* MDX Content - Prose classes handle all styling */}
        <div
          className="prose prose-base dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Footer */}
        <footer className="not-prose mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            <p className="mb-2">
              Published by <strong className="text-brand dark:text-white">{frontmatter.author}</strong> on{' '}
              <time dateTime={frontmatter.date}>
                {formatDate(frontmatter.date)}
              </time>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              href="/blog" 
              className="text-brand dark:text-white hover:text-[#124E75] dark:hover:text-gray-300 transition-colors font-medium"
            >
              ← Back to all posts
            </Link>
            <Link
              href="/contact"
              className="bg-brand hover:bg-[#124E75] text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </footer>
        </article>
      </div>
    </>
  );
}
