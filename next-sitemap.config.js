/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mccaigs.ai',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.9,
  outDir: './public',
  exclude: ['/admin/*', '/api/*', '/news-sitemap'],
  
  // Custom robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/private'],
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.mccaigs.ai/sitemap.xml',
      'https://www.mccaigs.ai/news-sitemap.xml',
    ],
  },
  
  // Custom transform for Google News compatibility
  transform: async (config, path) => {
    // Blog posts - optimized for Google News
    if (path.startsWith('/blog/') && path !== '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Main pages - highest priority
    if (path === '/' || path === '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Default transform
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
