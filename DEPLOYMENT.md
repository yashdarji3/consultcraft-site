# ConsultCraft Toolkit Page - Deployment Guide

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts and your site will be live!
```

### 2. Netlify
```bash
# Build the project
npm run build

# Deploy the .next folder to Netlify
# Or connect your GitHub repo for automatic deployments
```

### 3. GitHub Pages
```bash
# Add to package.json scripts
"export": "next build && next export"

# Build and export
npm run export

# Deploy the out folder to GitHub Pages
```

## 📁 Project Structure

```
consultcraft-toolkit/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── toolkit/
│       └── page.tsx        # Toolkit page
├── components/
│   └── ToolkitCard.tsx     # Reusable component
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README-toolkit.md
```

## 🔧 Environment Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/yashdarji3/consultcraft-site.git
cd consultcraft-site

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000/toolkit
```

## 🌐 Production Deployment

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📊 Analytics Integration

### Google Analytics
Add to `app/layout.tsx`:
```tsx
// Google Analytics
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
  }}
/>
```

### Facebook Pixel
Add to `app/layout.tsx`:
```tsx
// Facebook Pixel
<script
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `,
  }}
/>
```

## 🔒 Security & Performance

### Security Headers
Add to `next.config.js`:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### Performance Optimization
- Images are optimized with Next.js Image component
- CSS is purged with Tailwind
- JavaScript is tree-shaken
- Static assets are cached

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly buttons and forms
- Optimized loading times
- PWA ready (add manifest.json)

## 🎯 SEO Optimization

### Meta Tags
Already included in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter Card support
- Structured data ready

### Sitemap
Create `app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://consultcraft.com',
      lastModified: new Date(),
    },
    {
      url: 'https://consultcraft.com/toolkit',
      lastModified: new Date(),
    },
  ]
}
```

## 🚀 Monitoring & Analytics

### Performance Monitoring
- Vercel Analytics (if using Vercel)
- Google PageSpeed Insights
- Web Vitals monitoring

### Error Tracking
- Sentry integration
- Console error logging
- User feedback collection

## 📞 Support

For deployment issues or questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Vercel deployment guide](https://vercel.com/docs)
3. Contact the development team

---

**Your ConsultCraft toolkit page is ready to scale! 🚀** 