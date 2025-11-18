# McCaigs AI Blog System - Setup Documentation

## ✅ Current Configuration (React 19 Compatible)

### Installed Packages
```json
{
  "@mdx-js/mdx": "^3.1.1",           // MDX v3 compiler (React 19 compatible)
  "@mdx-js/react": "^3.1.1",         // React bindings for MDX v3
  "next-mdx-remote": "^5.0.0",       // RSC-compatible MDX renderer
  "remark-gfm": "^4.0.1",            // GitHub Flavored Markdown
  "rehype-slug": "^6.0.0",           // Auto-generate heading IDs
  "rehype-autolink-headings": "^7.1.0", // Auto-link headings
  "gray-matter": "^4.0.3",           // Frontmatter parsing
  "react": "^18.3.1",                // Single React instance
  "react-dom": "^18.3.1",
  "next": "15.5.4"
}
```

### File Structure
```
m-website/
├── lib/
│   └── mdx.tsx                    # MDX compilation helper
├── app/
│   └── blog/
│       ├── page.tsx               # Blog index page
│       └── [slug]/
│           └── page.tsx           # Dynamic blog post page
├── content/
│   └── blog/
│       ├── template.mdx           # Template for new posts
│       └── *.mdx                  # Blog post files
└── next.config.ts                 # Next.js config (no MDX plugin)
```

## 📝 How It Works

### 1. MDX Helper (`/lib/mdx.tsx`)

**Purpose:** Server-side MDX compilation with custom components

```typescript
import { compileMDX } from 'next-mdx-remote/rsc';

export async function getMDXContent(slug: string) {
  const source = fs.readFileSync(filePath, 'utf-8');

  const { content, frontmatter } = await compileMDX<BlogPost>({
    source,
    components,  // Custom Next.js Image and Link components
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      },
    },
  });

  return { content, frontmatter };
}
```

**Key Features:**
- ✓ Compiles MDX on the server (RSC)
- ✓ Parses frontmatter automatically
- ✓ Applies remark/rehype plugins
- ✓ Returns typed frontmatter + React elements
- ✓ No client-side compilation needed

### 2. Blog Post Page (`/app/blog/[slug]/page.tsx`)

**Purpose:** Render compiled MDX content

```typescript
import { getMDXContent } from '@/lib/mdx';

export default async function BlogPost({ params }) {
  const { content, frontmatter } = await getMDXContent(params.slug);

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <div className="prose dark:prose-invert">
        {content}  {/* Pre-compiled React elements */}
      </div>
    </article>
  );
}
```

**Key Features:**
- ✓ Server Component (async)
- ✓ Fetches compiled MDX from helper
- ✓ Renders pre-compiled React elements
- ✓ No MDXRemote component needed
- ✓ Type-safe frontmatter access

### 3. Blog Index (`/app/blog/page.tsx`)

Lists all blog posts using `gray-matter` for frontmatter extraction.

## 🎨 Styling

### Prose Classes Applied

```css
prose prose-lg dark:prose-invert max-w-none
prose-headings:text-brand dark:prose-headings:text-white
prose-h2:text-3xl prose-h2:mt-12
prose-a:text-brand dark:prose-a:text-white
prose-blockquote:border-l-brand
prose-code:text-brand dark:prose-code:text-white
```

### Custom Components

**Images:**
```tsx
img: (props) => (
  <Image
    {...props}
    width={800}
    height={600}
    className="rounded-lg my-4"
    alt={props.alt || ''}
  />
)
```

**Links:**
```tsx
a: (props) => (
  <Link
    {...props}
    className="text-brand dark:text-white hover:underline"
  />
)
```

## 📄 Creating New Blog Posts

### 1. Copy Template

```bash
cp content/blog/template.mdx content/blog/my-new-post.mdx
```

### 2. Edit Frontmatter

```yaml
---
title: "Your Post Title"
date: "2025-11-12"
author: "McCaigs AI Team"
excerpt: "Short description for SEO"
image: "/assets/blog/featured.jpg"
tags: ["AI", "Innovation"]
---
```

### 3. Write Content

```markdown
## Introduction

Your content here with **bold**, *italic*, and [links](/page).

![Alt text](/assets/image.jpg)

### Subsection

- Bullet points
- Work great

> Blockquotes too!
```

### 4. View Post

Navigate to: `http://localhost:3005/blog/my-new-post`

## 🔧 Troubleshooting

### React Version Error

**Problem:** "React Element from an older version of React was rendered"

**Solution:**
```bash
# Check for duplicates
npm ls react

# Deduplicate if needed
npm dedupe

# Clean install
rm -rf .next node_modules package-lock.json
npm install
```

### MDX Not Rendering

**Problem:** Blank page or content not displaying

**Checklist:**
1. ✓ Frontmatter is surrounded by `---`
2. ✓ Date format is `YYYY-MM-DD`
3. ✓ File ends with `.mdx`
4. ✓ File is not named `template.mdx`
5. ✓ No syntax errors in MDX content

### TypeScript Errors

**Problem:** Type errors in `lib/mdx.tsx`

**Solution:** Ensure file is `.tsx` not `.ts` for JSX support

### Build Errors

**Problem:** Build fails on deployment

**Solutions:**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

## 🚀 Deployment

### Environment Variables

None required for basic blog functionality.

### Build Command

```bash
npm run build
```

### Static Generation

All blog posts are statically generated at build time via `generateStaticParams()`.

## 📊 Performance

### Optimizations Applied

- ✓ Server-side MDX compilation (no client bundle)
- ✓ Next.js Image optimization for all images
- ✓ Static generation for all blog posts
- ✓ Automatic code splitting
- ✓ Optimized font loading (Poppins)

### Expected Results

- **First Load JS:** ~100-150KB
- **Blog Index:** Instant (static)
- **Blog Post:** Instant (static)
- **Images:** WebP with lazy loading

## 🧪 Testing

### Verify Setup

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Check blog index:**
   ```
   http://localhost:3005/blog
   ```

3. **View example post:**
   ```
   http://localhost:3005/blog/welcome-to-mccaigs-ai-blog
   ```

4. **Test features:**
   - ✓ Dark/light theme toggle
   - ✓ Image optimization
   - ✓ Link navigation
   - ✓ Heading auto-links (click heading)
   - ✓ Responsive design
   - ✓ GFM features (tables, task lists)

### Console Checks

**Should see:** ✓ No errors  
**Should NOT see:** ✗ React version warnings

## 📚 Enhanced Markdown

### GitHub Flavored Markdown (GFM)

**Tables:**
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |
```

**Task Lists:**
```markdown
- [x] Completed task
- [ ] Pending task
```

**Strikethrough:**
```markdown
~~Old text~~
```

### Auto-linked Headings

All headings automatically get:
- Slug-based IDs
- Clickable anchor links
- Smooth scroll navigation

**Example:**
```markdown
## My Section
```

Generates: `<h2 id="my-section">My Section</h2>` with auto-link

## 🎯 Best Practices

### Content

1. **Keep excerpts under 160 characters** for SEO
2. **Use descriptive alt text** for images
3. **Add tags consistently** for categorization
4. **Write clear headings** for navigation

### Images

1. **Store in `/public/assets/blog/`**
2. **Use 1200x630px** for featured images (OG standard)
3. **Optimize before upload** (use WebP when possible)
4. **Reference as `/assets/blog/image.jpg`**

### Dates

1. **Always use YYYY-MM-DD format**
2. **Use actual dates** for sorting
3. **Update date when republishing**

### Code Blocks

Use triple backticks with language:

\```typescript
const example = "code here";
\```

## 🔐 Security

### Content Safety

- ✓ All MDX compiles server-side
- ✓ No `dangerouslySetInnerHTML`
- ✓ Input sanitized via compileMDX
- ✓ XSS protection built-in

### Dependencies

All dependencies are official and actively maintained:
- `next-mdx-remote` - Official Next.js solution
- `@mdx-js/*` - Official MDX packages
- `remark-gfm` - Official GFM plugin
- `rehype-*` - Official rehype ecosystem

## 📈 Future Enhancements

### Potential Additions

- [ ] Reading time calculation
- [ ] Related posts suggestions
- [ ] Table of contents generation
- [ ] Syntax highlighting for code blocks
- [ ] RSS feed generation
- [ ] Search functionality
- [ ] Comment system integration
- [ ] Social share buttons
- [ ] View count tracking
- [ ] Newsletter signup

### Easy Additions

Most can be added to `/lib/mdx.tsx` without breaking changes.

## 🆘 Support

### Common Issues

1. **Date format errors:** Use `YYYY-MM-DD`
2. **Images not loading:** Check `/assets/` path
3. **Styling broken:** Verify prose classes
4. **React errors:** Run `npm dedupe`

### Resources

- [Next.js MDX Docs](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [MDX Documentation](https://mdxjs.com/)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- [Remark Plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)
- [Rehype Plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md)

---

**Last Updated:** November 12, 2025  
**Next.js Version:** 15.5.4  
**React Version:** 18.3.1  
**MDX Version:** 3.1.1  
**Status:** ✅ Production Ready
