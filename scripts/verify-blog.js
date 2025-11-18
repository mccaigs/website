/**
 * Blog System Verification Script
 * Run with: node scripts/verify-blog.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying McCaigs AI Blog System...\n');

const checks = [];

// Check 1: Required packages
console.log('📦 Checking packages...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const deps = packageJson.dependencies;

const requiredPackages = {
  '@mdx-js/mdx': '3.x',
  '@mdx-js/react': '3.x',
  'next-mdx-remote': '5.x',
  'remark-gfm': true,
  'rehype-slug': true,
  'rehype-autolink-headings': true,
  'gray-matter': true,
  'next': '15.x',
  'react': '18.x'
};

for (const [pkg, expectedVersion] of Object.entries(requiredPackages)) {
  if (deps[pkg]) {
    const version = deps[pkg].replace(/[\^~]/, '');
    const major = version.split('.')[0];
    const expectedMajor = typeof expectedVersion === 'string' ? expectedVersion.replace('.x', '') : null;
    
    if (expectedMajor && major === expectedMajor) {
      console.log(`  ✅ ${pkg}: ${deps[pkg]}`);
      checks.push({ name: pkg, status: 'pass' });
    } else if (expectedVersion === true) {
      console.log(`  ✅ ${pkg}: ${deps[pkg]}`);
      checks.push({ name: pkg, status: 'pass' });
    } else {
      console.log(`  ❌ ${pkg}: ${deps[pkg]} (expected ${expectedVersion})`);
      checks.push({ name: pkg, status: 'fail' });
    }
  } else {
    console.log(`  ❌ ${pkg}: NOT INSTALLED`);
    checks.push({ name: pkg, status: 'fail' });
  }
}

// Check 2: Required files
console.log('\n📁 Checking files...');
const requiredFiles = [
  'lib/mdx.tsx',
  'app/blog/page.tsx',
  'app/blog/[slug]/page.tsx',
  'content/blog/template.mdx',
  'content/blog/welcome-to-mccaigs-ai-blog.mdx'
];

for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
    checks.push({ name: file, status: 'pass' });
  } else {
    console.log(`  ❌ ${file}: MISSING`);
    checks.push({ name: file, status: 'fail' });
  }
}

// Check 3: Blog posts
console.log('\n📝 Checking blog posts...');
const blogDir = 'content/blog';
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir);
  const mdxFiles = files.filter(f => f.endsWith('.mdx') && f !== 'template.mdx');
  console.log(`  ✅ Found ${mdxFiles.length} blog post(s):`);
  mdxFiles.forEach(f => console.log(`     - ${f}`));
  checks.push({ name: 'blog posts', status: 'pass' });
} else {
  console.log(`  ❌ Blog directory not found`);
  checks.push({ name: 'blog posts', status: 'fail' });
}

// Check 4: Configuration
console.log('\n⚙️  Checking configuration...');
const nextConfig = fs.readFileSync('next.config.ts', 'utf8');

// Should NOT have @next/mdx
if (nextConfig.includes('@next/mdx')) {
  console.log(`  ❌ next.config.ts still references @next/mdx (should be removed)`);
  checks.push({ name: 'next.config.ts', status: 'fail' });
} else {
  console.log(`  ✅ next.config.ts: Clean (no @next/mdx)`);
  checks.push({ name: 'next.config.ts', status: 'pass' });
}

// Check 5: MDX helper
console.log('\n🔧 Checking MDX helper...');
if (fs.existsSync('lib/mdx.tsx')) {
  const mdxHelper = fs.readFileSync('lib/mdx.tsx', 'utf8');
  
  if (mdxHelper.includes('compileMDX')) {
    console.log(`  ✅ Uses compileMDX from next-mdx-remote/rsc`);
    checks.push({ name: 'compileMDX', status: 'pass' });
  } else {
    console.log(`  ❌ Missing compileMDX import`);
    checks.push({ name: 'compileMDX', status: 'fail' });
  }
  
  if (mdxHelper.includes('remarkGfm')) {
    console.log(`  ✅ GitHub Flavored Markdown enabled`);
    checks.push({ name: 'remarkGfm', status: 'pass' });
  }
  
  if (mdxHelper.includes('rehypeSlug')) {
    console.log(`  ✅ Heading IDs enabled`);
    checks.push({ name: 'rehypeSlug', status: 'pass' });
  }
  
  if (mdxHelper.includes('getMDXContent')) {
    console.log(`  ✅ getMDXContent function exported`);
    checks.push({ name: 'getMDXContent', status: 'pass' });
  }
}

// Summary
console.log('\n' + '='.repeat(50));
const passed = checks.filter(c => c.status === 'pass').length;
const failed = checks.filter(c => c.status === 'fail').length;
const total = checks.length;

console.log(`\n📊 Summary: ${passed}/${total} checks passed`);

if (failed === 0) {
  console.log('\n✅ ✅ ✅ All checks passed! Blog system is ready.');
  console.log('\n🚀 Start the dev server with: npm run dev');
  console.log('📍 Visit: http://localhost:3005/blog');
} else {
  console.log(`\n⚠️  ${failed} check(s) failed. Please review the output above.`);
  process.exit(1);
}

console.log('\n' + '='.repeat(50) + '\n');
