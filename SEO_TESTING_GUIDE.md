# 🧪 SEO Testing Guide - McCaigs AI

## Quick Test Checklist

After running `npm run dev`, verify all SEO features are working correctly.

---

## 1. ✅ Robots.txt

### Test URL
```
http://localhost:3005/robots.txt
```

### Expected Output
```txt
# McCaigs AI - Robots.txt
# https://www.mccaigs.ai/robots.txt

User-agent: *
Allow: /

# Disallow specific bots from private content
User-agent: GPTBot
Disallow: /private

# Crawl-delay for all bots
Crawl-delay: 0

# Sitemap
Sitemap: https://www.mccaigs.ai/sitemap.xml
```

### ✅ Pass Criteria
- File loads successfully (200 OK)
- All user-agent rules present
- Sitemap URL included

---

## 2. 📰 RSS Feed

### Test URL
```
http://localhost:3005/rss
```

### Expected Output
Valid XML starting with:
```xml
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>McCaigs AI Blog</title>
    <description>Insights, updates, and thought leadership from McCaigs AI...</description>
    <link>https://www.mccaigs.ai/</link>
    ...
```

### ✅ Pass Criteria
- XML renders (not HTML error)
- Channel information correct
- Blog posts listed as `<item>` elements
- Each item has title, link, description, pubDate
- Images included

### Test in Feed Reader
1. Copy: `http://localhost:3005/rss`
2. Add to any RSS reader (Feedly, Inoreader, etc.)
3. Verify posts appear correctly

---

## 3. ⚛️ Atom Feed

### Test URL
```
http://localhost:3005/atom
```

### Expected Output
Valid Atom XML:
```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>McCaigs AI Blog</title>
  <subtitle>Insights, updates, and thought leadership...</subtitle>
  ...
```

### ✅ Pass Criteria
- Valid Atom 1.0 format
- Feed metadata present
- Entries listed
- Timestamps in ISO 8601 format

---

## 4. 📊 JSON-LD Structured Data

### Test URL
```
http://localhost:3005/blog/welcome-to-mccaigs-ai-blog
```

### View Source
1. Right-click → "View Page Source" (NOT DevTools)
2. Search for: `application/ld+json`
3. Find JSON-LD script block

### Expected JSON-LD
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Welcome to McCaigs AI Blog",
  "description": "...",
  "image": "/assets/blog/...",
  "datePublished": "2025-11-12",
  "dateModified": "2025-11-12",
  "author": {
    "@type": "Person",
    "name": "McCaigs AI Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "McCaigs AI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mccaigs.ai/assets/logo-light.svg"
    }
  },
  "keywords": "AI, Innovation, Privacy",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mccaigs.ai/blog/welcome-to-mccaigs-ai-blog"
  }
}
```

### ✅ Pass Criteria
- JSON-LD block exists in HTML
- `@type` is "Article"
- All required fields populated
- Valid JSON syntax

### Validate Online
1. Copy entire JSON-LD block
2. Visit: https://validator.schema.org/
3. Paste JSON
4. Click "Validate"
5. Should show: "Article" schema valid

### Google Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter URL: `http://localhost:3005/blog/welcome-to-mccaigs-ai-blog`
3. Click "Test URL"
4. Wait for results

**Expected:**
- ✅ "Article" detected
- ✅ Headline, author, date visible
- ✅ Image preview shown
- ✅ No errors

---

## 5. 🗺️ Sitemap (After Build)

### Generate Sitemap
```bash
npm run build
```

**What happens:**
1. Next.js builds application
2. `postbuild` script runs
3. `next-sitemap` generates files

### Generated Files
```
/public/
├── sitemap.xml           ← Main sitemap
├── sitemap-0.xml         ← Sitemap index
└── robots.txt            ← Updated robots
```

### Test Sitemap
```
http://localhost:3005/sitemap.xml
```

### Expected Output
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.mccaigs.ai/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>2025-11-12T...</lastmod>
  </url>
  <url>
    <loc>https://www.mccaigs.ai/blog</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>2025-11-12T...</lastmod>
  </url>
  <url>
    <loc>https://www.mccaigs.ai/blog/welcome-to-mccaigs-ai-blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <lastmod>2025-11-12T...</lastmod>
  </url>
  <!-- More URLs... -->
</urlset>
```

### ✅ Pass Criteria
- Valid XML structure
- All pages listed
- Priorities correct (homepage = 1.0, blog posts = 0.9)
- lastmod dates present
- Change frequencies appropriate

### Validate Sitemap
1. Visit: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Enter URL or paste XML
3. Click "Validate"
4. Should show: Valid sitemap

---

## 6. 🌐 Meta Tags (SEO Headers)

### Test Blog Post
```
http://localhost:3005/blog/welcome-to-mccaigs-ai-blog
```

### View Source → Check Meta Tags

#### Required Meta Tags
```html
<!-- Title -->
<title>Welcome to McCaigs AI Blog | McCaigs AI Blog</title>

<!-- Description -->
<meta name="description" content="Insights, updates, and thought leadership from McCaigs AI.">

<!-- Keywords -->
<meta name="keywords" content="AI, Innovation, Privacy">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Welcome to McCaigs AI Blog">
<meta property="og:description" content="Insights, updates...">
<meta property="og:type" content="article">
<meta property="og:image" content="/assets/blog/...">
<meta property="og:url" content="https://www.mccaigs.ai/blog/...">
<meta property="article:published_time" content="2025-11-12">
<meta property="article:author" content="McCaigs AI Team">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Welcome to McCaigs AI Blog">
<meta name="twitter:description" content="Insights, updates...">
<meta name="twitter:image" content="/assets/blog/...">
<meta name="twitter:creator" content="@McCaigsAI">
```

### ✅ Pass Criteria
- All meta tags present
- Content matches frontmatter
- Image URLs valid
- Twitter card type is "summary_large_image"

### Test Social Sharing

#### Facebook Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter URL
3. Click "Scrape Again"
4. Verify preview looks correct

#### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter URL
3. Click "Preview card"
4. Verify large image card displays

#### LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter URL
3. Click "Inspect"
4. Verify preview

---

## 7. 📱 Mobile-Friendly Test

### Google Mobile-Friendly Test
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter blog post URL
3. Click "Test URL"
4. Should show: "Page is mobile-friendly"

---

## 8. ⚡ PageSpeed Test

### Google PageSpeed Insights
1. Go to: https://pagespeed.web.dev/
2. Enter URL
3. Run test
4. Check scores:
   - Performance: >90
   - Accessibility: >95
   - Best Practices: >90
   - SEO: 100

---

## Complete Test Sequence

### 1. Development Server
```bash
npm run dev
```

### 2. Test Feeds
- [ ] `/robots.txt` loads
- [ ] `/rss` returns valid XML
- [ ] `/atom` returns valid XML
- [ ] RSS validates at validator.w3.org
- [ ] Feeds show in RSS reader

### 3. Test Blog Post
- [ ] Visit blog post
- [ ] View source → find JSON-LD
- [ ] Copy JSON → validate at schema.org
- [ ] Test at Google Rich Results
- [ ] Check all meta tags present

### 4. Build & Test Sitemap
```bash
npm run build
npm start
```

- [ ] `/sitemap.xml` exists
- [ ] Contains all pages
- [ ] Validates online
- [ ] robots.txt points to sitemap

### 5. Production Validation
After deployment:
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster
- [ ] Verify indexing after 24-48 hours
- [ ] Check rich results in search

---

## Production Deployment Checklist

### Before Deploy
- [ ] Test all endpoints locally
- [ ] Validate JSON-LD
- [ ] Validate feeds
- [ ] Run `npm run build` successfully

### After Deploy
- [ ] Verify all URLs publicly accessible
- [ ] Test social sharing on all platforms
- [ ] Submit to search engines
- [ ] Set up monitoring

### Submit Sitemaps

#### Google Search Console
1. Go to: https://search.google.com/search-console
2. Add property (if new)
3. Go to "Sitemaps"
4. Enter: `https://www.mccaigs.ai/sitemap.xml`
5. Click "Submit"

#### Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add site (if new)
3. Go to "Sitemaps"
4. Enter sitemap URL
5. Submit

### Monitor

#### Google Search Console
- Index coverage
- Performance
- Rich results
- Manual actions

#### Metrics to Track
- Organic impressions
- Click-through rate (CTR)
- Average position
- Rich results appearances
- RSS subscribers

---

## Common Issues & Fixes

### RSS Feed Empty
**Problem:** No items in feed  
**Fix:** Ensure `.mdx` files in `/content/blog/` with valid frontmatter

### JSON-LD Not Showing
**Problem:** No structured data in source  
**Fix:** View page source (not DevTools), search for `ld+json`

### Sitemap Not Generated
**Problem:** No sitemap after build  
**Fix:** Check `postbuild` script in package.json

### Meta Tags Missing
**Problem:** OG tags not in source  
**Fix:** Verify `generateMetadata` function in page.tsx

### Rich Results Fail
**Problem:** Google can't parse structured data  
**Fix:** Validate JSON-LD at schema.org first

---

## Tools Reference

### Validation
- [Schema Validator](https://validator.schema.org/)
- [RSS Validator](https://validator.w3.org/feed/)
- [Google Rich Results](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Social Debugging
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster](https://www.bing.com/webmasters)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Last Updated:** November 12, 2025  
**Status:** ✅ All SEO Features Implemented
