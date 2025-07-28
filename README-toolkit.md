# ConsultCraft AI Toolkit Page

A fully responsive and minimalist `/toolkit` page for the ConsultCraft website built with Next.js, React, and Tailwind CSS.

## 🎯 Overview

**Goal**: Generate leads by offering a free AI Toolkit for coaches and consultants.

**Tech Stack**:
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Inter Font** - Modern typography

## 🚀 Features

### Design
- **Minimalist & Clean** - Framer-style design with lots of whitespace
- **Fully Responsive** - Mobile-first design that works on all devices
- **Modern Animations** - Subtle fade-in and bounce effects
- **Brand Colors** - ConsultCraft color scheme (Dark Blue, Sky Blue, Light Gray)

### Sections
1. **Hero Section**
   - Headline: "The Only AI Toolkit Coaches Need to Scale Smarter"
   - Subtext: "Automate your content, leads, and onboarding in one place — 100% free."
   - CTA button with subtle animation

2. **Toolkit Preview Section**
   - 5 feature cards with icons and descriptions:
     - AI Content Generator Prompts (ChatGPT-based)
     - CRM & Lead Tracker (Notion)
     - Client Onboarding System
     - Automation Blueprint (Zapier + Notion + Email)
     - Bonus: AI Funnel Flow

3. **Lead Capture Section**
   - Email form with validation
   - Success/error handling
   - Privacy notice

4. **Footer**
   - Social links
   - Brand information

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure
```
app/
├── globals.css          # Global styles with Tailwind
├── layout.tsx          # Root layout component
├── page.tsx            # Home page (redirects to toolkit)
└── toolkit/
    └── page.tsx        # Main toolkit page
```

## 🎨 Customization

### Colors
Update `tailwind.config.js`:
```javascript
colors: {
  'consultcraft': {
    'dark-blue': '#0F172A',
    'sky': '#38BDF8',
    'light-gray': '#f8fafc',
    'gray': '#64748b',
    'light-text': '#94a3b8',
  }
}
```

### Content
- Update text content in `app/toolkit/page.tsx`
- Modify toolkit features array
- Change CTA buttons and forms

### Styling
- Custom components in `app/globals.css`
- Tailwind utilities for quick styling
- Responsive breakpoints: sm, md, lg, xl

## 📱 Responsive Design

- **Mobile**: Stacked layout with mobile-optimized CTAs
- **Tablet**: 2-column grid for features
- **Desktop**: 3-column grid with full layout

## 🚀 Performance

- **Next.js App Router** - Fast page loads
- **Tailwind CSS** - Optimized CSS bundle
- **TypeScript** - Type safety and better DX
- **SEO Optimized** - Meta tags and structured data

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Flexbox, CSS Variables

## 📊 Analytics Ready

The page is structured for easy integration with:
- Google Analytics
- Facebook Pixel
- Hotjar
- Other tracking tools

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

### Other Platforms
- Any static hosting service
- CDN deployment
- Docker containerization

## 📝 License

MIT License - Feel free to use and modify for your projects.

## 🤝 Support

For questions or customization requests, contact the development team.

---

**Built with ❤️ for coaches and consultants who want to scale without burnout.** 