# JAMSTACK Static Site Deployment Guide

This guide covers the complete process of building and deploying a static website using JAMSTACK architecture, with automated deployment to GitHub Pages and custom domain setup through Google Admin.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Static Site Generator Setup](#static-site-generator-setup)
- [Development Workflow](#development-workflow)
- [GitHub Pages Configuration](#github-pages-configuration)
- [Custom Domain Setup](#custom-domain-setup)
- [CI/CD Pipeline](#cicd-pipeline)
- [Content Management](#content-management)
- [Performance Optimization](#performance-optimization)
- [Testing and Deployment](#testing-and-deployment)
- [Troubleshooting](#troubleshooting)

## Overview

JAMSTACK (JavaScript, APIs, and Markup) is an architecture designed to make the web faster, more secure, and easier to scale. This guide focuses on:

- **Static Site Generation**: Pre-built HTML, CSS, and JavaScript
- **Headless CMS Integration**: Content management through APIs
- **CDN Deployment**: Global content delivery via GitHub Pages
- **Custom Domain**: Professional branding through Google Admin

## Prerequisites

- Node.js (v16 or higher)
- Git
- GitHub account
- Google Admin access (for custom domain)
- Basic knowledge of HTML, CSS, and JavaScript

## Project Setup

### 1. Initialize Project Structure

```bash
mkdir my-jamstack-site
cd my-jamstack-site
npm init -y
```

### 2. Create Basic Directory Structure

```
my-jamstack-site/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── styles/
├── content/
├── static/
├── .github/
│   └── workflows/
├── package.json
├── README.md
└── .gitignore
```

## Static Site Generator Setup

### Option 1: Next.js (Recommended for React)

**Why Next.js over Netlify or other JAMSTACK-natives?**

While platforms like Netlify are excellent for deployment, Next.js offers several key advantages:

**🔧 Full Control & Flexibility**
- Deploy anywhere: GitHub Pages, Netlify, Vercel, AWS, or self-hosted
- Not locked into a single vendor's ecosystem
- Customize build process, routing, and optimization

**⚡ Performance & Features**
- Server-Side Rendering (SSR) for dynamic content
- Static Site Generation (SSG) for fast loading
- Incremental Static Regeneration (ISR) for real-time updates
- Built-in Image Optimization and Code Splitting

**🚀 Developer Experience**
- Zero-config setup with intelligent defaults
- File-based routing that's intuitive
- API Routes for serverless functions
- TypeScript support out of the box
- Hot reload and fast refresh in development

**📈 Scalability**
- Handles both static and dynamic content seamlessly
- Automatic optimization for production
- Global CDN deployment ready
- Enterprise-grade performance monitoring

**Comparison with JAMSTACK Alternatives:**
- **Netlify**: Great deployment platform, but limited as a framework
- **Gatsby**: Excellent for content sites, but slower builds and more complex
- **Hugo**: Blazing fast, but less flexible for complex apps
- **Eleventy**: Simple but limited for larger projects

Next.js gives you the best of both worlds: JAMSTACK benefits with full-stack capabilities.

```bash
npm install next react react-dom
```

Create `pages/index.js`:

```javascript
export default function Home() {
  return (
    <div>
      <h1>Welcome to JAMSTACK</h1>
      <p>Your static site is ready!</p>
    </div>
  );
}
```

### Option 2: Gatsby

```bash
npm install gatsby-cli
npx gatsby new my-site
```

### Option 3: Hugo (Go-based)

```bash
# Install Hugo
brew install hugo

# Create new site
hugo new site my-site
```

## Development Workflow

### 1. Local Development

```bash
# For Next.js
npm run dev

# For Gatsby
npm run develop

# For Hugo
hugo server -D
```

### 2. Build Process

```bash
# Next.js
npm run build

# Gatsby
npm run build

# Hugo
hugo --minify
```

### 3. Static Export

For Next.js static export:

```javascript
// next.config.js
module.exports = {
  output: 'export',
  trailingSlash: true,
}
```

## GitHub Pages Configuration

### 1. Repository Setup

1. Create a new repository on GitHub
2. Push your code:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/docs" folder (or root for custom workflow)
5. Save settings

### 3. GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## Custom Domain Setup

### 1. Google Admin Domain Configuration

1. Log into Google Admin Console
2. Navigate to **Domains** → **Manage domains**
3. Add your custom domain if not already added
4. Go to **Domains** → **DNS settings**

### 2. DNS Records for GitHub Pages

Add these records in Google Admin DNS settings:

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153

Type: CNAME
Name: www
Value: username.github.io
```

### 3. GitHub Repository Domain Settings

1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS"
4. Save

### 4. Domain Verification

GitHub will provide a verification TXT record. Add it to Google Admin:

```
Type: TXT
Name: _github-pages-challenge-username.repo-name
Value: [verification-code-from-github]
```

## CI/CD Pipeline

### Automated Build and Deploy

The GitHub Actions workflow handles:

- **Build**: Compiles your static site
- **Test**: Runs any configured tests
- **Deploy**: Publishes to GitHub Pages
- **CDN**: Automatic global distribution

### Environment Variables

Add secrets in GitHub repository settings:

- API keys for headless CMS
- Custom environment variables
- Deployment tokens

## Content Management

### Headless CMS Options

#### Netlify CMS (Free)

```javascript
// static/admin/config.yml
backend:
  name: github
  repo: username/repo-name
  branch: main

media_folder: static/images
public_folder: /images

collections:
  - name: posts
    label: Posts
    folder: content/posts
    create: true
    fields:
      - {name: title, label: Title}
      - {name: body, label: Body, widget: markdown}
```

#### Strapi (Self-hosted)

```bash
npx create-strapi-app my-project --quickstart
```

#### Contentful (Cloud-hosted)

```javascript
// src/contentful.js
import { createClient } from 'contentful'

export default createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})
```

## Performance Optimization

### 1. Image Optimization

```javascript
// next.config.js
module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
}
```

### 2. Code Splitting

```javascript
// Dynamic imports
const DynamicComponent = dynamic(() => import('../components/HeavyComponent'))
```

### 3. Caching Strategy

```javascript
// _app.js (Next.js)
import { CacheProvider } from '@emotion/react'

export default function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}
```

### 4. CDN Configuration

GitHub Pages automatically serves content via Fastly CDN with:

- Global edge locations
- Automatic HTTPS
- HTTP/2 support
- Compression enabled

## Testing and Deployment

### 1. Local Testing

```bash
# Build and serve locally
npm run build
npx serve out -p 3000
```

### 2. Automated Testing

Add to your workflow:

```yaml
- name: Run tests
  run: npm test

- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v10
  with:
    urls: https://username.github.io/repo-name
    configPath: .lighthouserc.json
```

### 3. Deployment Verification

After deployment, verify:

- [ ] Site loads correctly
- [ ] Custom domain resolves
- [ ] HTTPS certificate active
- [ ] All assets loading
- [ ] Forms and interactions working

## Troubleshooting

### Common Issues

#### 1. 404 Errors on Refresh

**Problem**: Client-side routing not configured for static hosting

**Solution**: Add `_redirects` file:

```
/*    /index.html   200
```

#### 2. Custom Domain Not Working

**Solution**: Wait for DNS propagation (up to 24 hours) and verify records

#### 3. Build Failures

**Check**:
- Node.js version compatibility
- Dependencies installed correctly
- Build scripts configured properly

#### 4. HTTPS Issues

**Solution**: Ensure custom domain is verified and HTTPS is enforced in GitHub Pages settings

### Useful Commands

```bash
# Check DNS propagation
dig yourdomain.com

# Clear DNS cache (macOS)
sudo dscacheutil -flushcache

# Check GitHub Pages status
curl -I https://username.github.io/repo-name
```

## Additional Resources

- [JAMSTACK.org](https://jamstack.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Google Admin DNS Guide](https://support.google.com/a/answer/48090)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Gatsby Deployment Guide](https://www.gatsbyjs.com/docs/deploying-to-github-pages/)

---

**Need Help?** Check the troubleshooting section or open an issue in your repository.
