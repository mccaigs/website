# McCaigs AI Blog System

## Overview
This directory contains all blog posts for the McCaigs AI website. Posts are written in MDX (Markdown + JSX) format and automatically rendered on the `/blog` page.

## Quick Start

### Creating a New Blog Post

1. **Copy the template:**
   ```bash
   cp template.mdx my-new-post.mdx
   ```

2. **Edit the frontmatter** (metadata at the top):
   ```yaml
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   author: "Author Name"
   excerpt: "A brief summary for SEO and previews (1-2 sentences)"
   image: "/assets/blog/your-image.jpg"
   tags: ["AI", "Innovation", "Research"]
   ---
   ```

3. **Write your content** using Markdown syntax

4. **Save the file** - it will automatically appear on `/blog`

## File Naming Convention

- Use kebab-case: `my-blog-post.mdx`
- The filename becomes the URL slug: `/blog/my-blog-post`
- Avoid spaces and special characters

## Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Post title | "Welcome to McCaigs AI" |
| `date` | ✅ | Publication date | "2025-11-12" |
| `author` | ✅ | Author name | "McCaigs AI Team" |
| `excerpt` | ✅ | Short summary (SEO) | "Introducing our blog..." |
| `image` | ✅ | Featured image path | "/assets/blog/post.jpg" |
| `tags` | ✅ | Array of tags | ["AI", "Innovation"] |

## Markdown Syntax Reference

### Headings
```markdown
## Section Heading (H2)
### Subsection (H3)
```

### Lists
```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Second item
```

### Links
```markdown
[Link text](/page)
[External link](https://example.com)
```

### Bold and Italic
```markdown
**bold text**
*italic text*
```

### Blockquotes
```markdown
> "Important quote or callout"
```

### Code
```markdown
Inline `code` snippet

\```javascript
// Code block
const example = "hello";
\```
```

### Images
```markdown
![Alt text](/assets/image.jpg)
```

## AI Tool Instructions

For AI assistants creating blog posts:

1. **Always use template.mdx as the starting point**
2. **Fill all frontmatter fields** - do not leave placeholders
3. **Use proper date format**: YYYY-MM-DD (e.g., "2025-11-12")
4. **Choose relevant tags** from: AI, Innovation, Research, Education, Privacy, Business, Technology
5. **Keep excerpts concise**: 1-2 sentences maximum
6. **Use existing images** from `/assets` or specify placeholder path
7. **Follow the content structure**: Intro → Sections → Conclusion/CTA
8. **Use proper heading hierarchy**: H2 for main sections, H3 for subsections
9. **Include lists, quotes, or callouts** for better readability
10. **End with a CTA** or summary statement

## Image Guidelines

- Store blog images in `/public/assets/blog/`
- Recommended size: 1200x630px (Open Graph standard)
- Format: PNG, JPG, or WebP
- Reference in frontmatter: `/assets/blog/filename.jpg`

## Styling Notes

- The blog automatically applies McCaigs AI brand colors
- Headings use `#15608F` in light mode, white in dark mode
- Prose styling is pre-configured for readability
- Responsive design works across all devices

## Testing Your Post

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:3005/blog`
3. Your new post should appear in the list
4. Click to view the full post at `/blog/your-slug`

## Troubleshooting

**Post not appearing?**
- Check that filename ends with `.mdx`
- Verify all frontmatter fields are present
- Ensure date format is correct (YYYY-MM-DD)
- Restart the dev server

**Image not loading?**
- Confirm image exists in `/public/assets/`
- Check path starts with `/assets/` (not `/public/assets/`)
- Verify image extension matches filename

**Formatting issues?**
- Ensure frontmatter is surrounded by `---`
- Check for missing closing tags in JSX components
- Validate Markdown syntax

## Examples

See `welcome-to-mccaigs-ai-blog.mdx` for a complete, working example.

---

**For questions or issues, contact the McCaigs AI development team.**
