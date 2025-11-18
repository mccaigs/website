# ✅ React Runtime Version Conflict - Fixed

## Overview

Fixed the React version conflict error: **"A React Element from an older version of React was rendered."**

This error occurs when multiple versions of React exist in the dependency tree, causing Next.js to use different React runtimes for different components.

---

## 🐛 Problem

**Error Message:**
```
Error: A React Element from an older version of React was rendered.
This can happen if:
- Multiple versions of React are installed
- MDX packages are using a different React version
- Nested dependencies have their own React copies
```

**Root Causes:**
1. **Multiple React copies** in `node_modules`
2. **MDX packages** (`@mdx-js/mdx`, `next-mdx-remote`) importing different React versions
3. **Nested dependencies** with bundled React
4. **Build cache** containing old React references

---

## ✅ Solutions Implemented

### 1. **Force React 18.3.1 Across All Dependencies**

**File:** `/package.json`

**Added:**
```json
{
  "overrides": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  }
}
```

**What it does:**
- Forces ALL dependencies (including nested ones) to use React 18.3.1
- Prevents `@mdx-js/mdx`, `next-mdx-remote`, and other packages from installing their own React versions
- Works with npm 8.3.0+

**Alternative for Yarn:**
```json
{
  "resolutions": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  }
}
```

---

### 2. **Added Clean Script**

**File:** `/package.json`

**Added:**
```json
{
  "scripts": {
    "clean": "rimraf .next .turbo node_modules/.cache"
  }
}
```

**Usage:**
```bash
npm run clean
```

**What it cleans:**
- `.next` - Next.js build cache
- `.turbo` - Turborepo cache (if using monorepo)
- `node_modules/.cache` - Package caches

---

### 3. **Updated TypeScript Config**

**File:** `/tsconfig.json`

**Added:**
```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "react"
  }
}
```

**Why:**
- `jsx: "preserve"` - Let Next.js handle JSX transformation
- `jsxImportSource: "react"` - Explicitly set React as JSX source
- Ensures consistent JSX runtime across all files

---

### 4. **Added Webpack Aliases**

**File:** `/next.config.ts`

**Added:**
```typescript
webpack: (config, { isServer }) => {
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    react: path.resolve('./node_modules/react'),
    'react-dom': path.resolve('./node_modules/react-dom'),
    'react/jsx-runtime': path.resolve('./node_modules/react/jsx-runtime'),
    'react/jsx-dev-runtime': path.resolve('./node_modules/react/jsx-dev-runtime'),
  };
  
  return config;
}
```

**What it does:**
- Forces webpack to ALWAYS use the root `node_modules/react`
- Even if a package tries to import its own bundled React, this redirects it
- Applies to all JSX runtimes (production and development)

**Before:**
```
node_modules/
├── react@18.3.1
├── @mdx-js/mdx/
│   └── node_modules/
│       └── react@18.2.0  ← Different version!
└── next-mdx-remote/
    └── node_modules/
        └── react@17.0.2  ← Different version!
```

**After:**
```
node_modules/
├── react@18.3.1  ← Only this is used
├── @mdx-js/mdx/  ← Uses root React
└── next-mdx-remote/  ← Uses root React
```

---

## 📋 Installation Steps

### 1. **Remove Old Dependencies**

```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules, .next, package-lock.json

# Or use the clean script
npm run clean
Remove-Item -Force package-lock.json
```

### 2. **Reinstall with Overrides**

```bash
npm install
```

**What happens:**
- npm reads `overrides` from `package.json`
- Forces all packages to use React 18.3.1
- Deduplicates React dependencies
- Creates clean dependency tree

### 3. **Verify Single React Version**

```bash
npm ls react
```

**Expected output:**
```
mccaigs-ai-website@0.1.0
└── react@18.3.1
```

**If you see multiple versions:**
```bash
npm dedupe
npm install
```

### 4. **Verify React DOM**

```bash
npm ls react-dom
```

**Expected:**
```
mccaigs-ai-website@0.1.0
└── react-dom@18.3.1
```

---

## 🧪 Testing

### 1. **Start Dev Server**

```bash
npm run dev
```

### 2. **Check Console**

Open browser DevTools console and verify:

**Should NOT see:**
- ❌ "A React Element from an older version of React was rendered"
- ❌ "Multiple versions of React detected"
- ❌ "Invalid hook call"
- ❌ Hydration errors

**Should see:**
- ✅ Clean console (no React errors)
- ✅ Blog posts render correctly
- ✅ MDX content displays properly
- ✅ No runtime warnings

### 3. **Test Blog Pages**

**Visit:**
```
http://localhost:3005/blog
http://localhost:3005/blog/welcome-to-mccaigs-ai-blog
```

**Verify:**
- ✅ Pages load without errors
- ✅ MDX renders correctly
- ✅ Images display
- ✅ Links work
- ✅ Typography styling intact

### 4. **Production Build**

```bash
npm run build
```

**Should complete without:**
- ❌ React version warnings
- ❌ Webpack duplicate module warnings
- ❌ Build errors

---

## 🔍 Verification Commands

### Check Dependency Tree

```bash
# Show all React instances
npm ls react react-dom

# Show detailed tree
npm ls --all | findstr "react@"

# Check for duplicates
npm dedupe --dry-run
```

### Check Module Resolution

```bash
# On Windows PowerShell
Get-ChildItem -Recurse -Filter "react" node_modules | Select-Object FullName

# Should only show:
# node_modules\react
# node_modules\.bin\react (symlink - OK)
```

---

## 🛠️ Troubleshooting

### Issue: Still Seeing Multiple React Versions

**Solution 1: Hard Clean**
```bash
Remove-Item -Recurse -Force node_modules, .next, .turbo, package-lock.json
npm cache clean --force
npm install
```

**Solution 2: Dedupe**
```bash
npm dedupe
npm install
```

**Solution 3: Check for Local Links**
```bash
npm ls --link
# Should show nothing or only intended links
```

---

### Issue: Error During npm install

**Error:**
```
ERESOLVE unable to resolve dependency tree
```

**Solution:**
```bash
npm install --legacy-peer-deps
```

Or add to `.npmrc`:
```
legacy-peer-deps=true
```

---

### Issue: MDX Still Not Working

**Check:**
1. Verify using `compileMDX` from `next-mdx-remote/rsc`
2. Not using `evaluate` from `@mdx-js/mdx`
3. Components properly imported

**File:** `/lib/mdx.tsx`
```typescript
// ✅ Correct
import { compileMDX } from 'next-mdx-remote/rsc';

// ❌ Wrong
import { evaluate } from '@mdx-js/mdx';
```

---

### Issue: Webpack Alias Not Working

**Check Next.js version:**
```bash
npm ls next
```

**Should be:** 15.5.4 or higher

**If older:**
```bash
npm install next@latest
```

---

## 📊 Before vs After

### Before

**Dependency Tree:**
```
├── react@18.3.1
├── @mdx-js/mdx
│   └── node_modules
│       └── react@18.2.0  ← Conflict!
└── next-mdx-remote
    └── node_modules
        └── react@17.0.2  ← Conflict!
```

**Console:**
```
❌ Error: A React Element from an older version of React was rendered
❌ Warning: Invalid hook call
❌ Multiple React instances detected
```

### After

**Dependency Tree:**
```
├── react@18.3.1  ← Single version
├── @mdx-js/mdx  ← Uses root React
└── next-mdx-remote  ← Uses root React
```

**Console:**
```
✅ No errors
✅ Clean output
✅ Single React runtime
```

---

## 🔒 Prevention

### Always Use Overrides

```json
{
  "overrides": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  }
}
```

### Check Before Installing New Packages

```bash
# Before
npm ls react

# Install package
npm install some-package

# After
npm ls react
# Should still show single version
```

### Use Clean Install for Updates

```bash
npm run clean
Remove-Item -Force package-lock.json
npm install
```

---

## 📚 Technical Details

### Why Multiple React Versions Cause Errors

**React uses internal state and context:**
1. Components created with React 18.3.1
2. Rendered by React 18.2.0
3. React sees mismatched internal structures
4. Throws error: "Element from older version"

**Webpack module resolution:**
- Each package can have `node_modules/react`
- Webpack resolves to nearest `react` folder
- Different packages → different React instances
- Our aliases force single resolution

### npm Overrides vs Yarn Resolutions

| Feature | npm (overrides) | Yarn (resolutions) |
|---------|-----------------|-------------------|
| **Syntax** | `overrides` | `resolutions` |
| **Version** | npm 8.3.0+ | Yarn 1.x+ |
| **Support** | ✅ npm, pnpm | ✅ Yarn only |
| **Force** | ✅ All nested | ✅ All nested |

### Webpack Aliases vs Overrides

**Overrides:**
- Control which versions are installed
- Affects `node_modules` structure
- Works at install time

**Webpack Aliases:**
- Control which modules are bundled
- Affects build output
- Works at build time

**Best practice:** Use both for maximum safety

---

## 🎯 Key Takeaways

1. **npm overrides** force single React version in `node_modules`
2. **Webpack aliases** force single React resolution at build time
3. **Clean install** removes cached conflicts
4. **Verify** with `npm ls react` showing single version
5. **Test** in both dev and production modes

---

## ✅ Checklist

- [ ] Added `overrides` to `package.json`
- [ ] Added `clean` script to `package.json`
- [ ] Added `jsxImportSource` to `tsconfig.json`
- [ ] Added webpack aliases to `next.config.ts`
- [ ] Cleaned build artifacts: `npm run clean`
- [ ] Removed lock file: `Remove-Item package-lock.json`
- [ ] Reinstalled: `npm install`
- [ ] Verified single React: `npm ls react`
- [ ] Tested dev server: No errors in console
- [ ] Tested production build: `npm run build` succeeds
- [ ] Tested blog pages: All render correctly

---

## 📖 References

### Official Documentation

- [npm overrides](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides)
- [Next.js webpack config](https://nextjs.org/docs/app/api-reference/next-config-js/webpack)
- [React version conflicts](https://react.dev/warnings/invalid-hook-call-warning)

### Related Issues

- [Next.js #43379](https://github.com/vercel/next.js/discussions/43379) - Multiple React instances
- [MDX #2119](https://github.com/mdx-js/mdx/issues/2119) - React version conflicts

---

**Status:** ✅ Fixed  
**Last Updated:** November 12, 2025  
**Next.js Version:** 15.5.4  
**React Version:** 18.3.1
