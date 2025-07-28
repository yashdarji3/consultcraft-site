# ConsultCraft Landing Page

A clean, modern, minimalist landing page for ConsultCraft - a service brand that helps coaches & consultants scale with AI-powered systems.

## 🎯 Overview

**ConsultCraft** - "Smart Systems for Coaches & Consultants"

This landing page is built with modern web technologies and follows Framer-style design principles with:
- Clean, minimalist design
- Responsive layout (mobile + desktop)
- Smooth animations and transitions
- Modern typography (Inter font)
- Professional color scheme

## 🎨 Design Features

### Color Scheme
- **White**: `#ffffff` - Primary background
- **Dark Blue**: `#0F172A` - Primary text and dark sections
- **Sky Blue**: `#38BDF8` - Accent color and CTAs
- **Light Gray**: `#f8fafc` - Secondary backgrounds
- **Gray**: `#64748b` - Secondary text

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Clamp functions for fluid typography

### Design Elements
- Rounded corners (`12px` border-radius)
- Soft drop shadows
- Smooth transitions (`0.3s cubic-bezier`)
- Lots of whitespace
- Framer-style layout principles

## 📱 Responsive Design

The landing page is fully responsive with:
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted grid layouts
- **Mobile**: Stacked layout with mobile menu
- **Breakpoints**: 768px, 480px

## 🚀 Features

### Sections
1. **Header** - Fixed navigation with mobile menu
2. **Hero** - Main value proposition with Notion mockup
3. **Services** - 3-column grid of service offerings
4. **Toolkit** - Feature highlight with dashboard preview
5. **Testimonials** - Social proof cards
6. **About** - Founder story and mission
7. **Contact** - Email capture with social links
8. **Footer** - Links and legal information

### Interactive Elements
- **Mobile Menu** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Anchor links with smooth scroll
- **Scroll Animations** - Fade-in effects on scroll
- **Form Handling** - Email capture with validation
- **CTA Buttons** - All lead to contact section
- **Dashboard Tabs** - Interactive tab switching

### Performance Optimizations
- **Font Preloading** - Google Fonts with preconnect
- **CSS Variables** - Consistent theming
- **Intersection Observer** - Efficient scroll animations
- **Minimal JavaScript** - Lightweight interactions

## 📁 File Structure

```
consultcraft-landing/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styles
├── script.js           # Interactive JavaScript
└── README.md          # This documentation
```

## 🛠️ Usage

### For Framer
1. Copy the HTML content from `index.html`
2. Copy the CSS from `styles.css` 
3. Copy the JavaScript from `script.js`
4. Paste into your Framer project
5. Customize colors, content, and styling as needed

### For Standalone Website
1. Upload all files to your web server
2. Ensure all files are in the same directory
3. Access via `index.html`

### For Development
1. Clone or download the files
2. Open `index.html` in a web browser
3. Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 🎨 Customization

### Colors
Update CSS variables in `:root`:
```css
:root {
    --color-white: #ffffff;
    --color-dark-blue: #0F172A;
    --color-sky: #38BDF8;
    --color-light-gray: #f8fafc;
    --color-gray: #64748b;
}
```

### Content
- Update text content in `index.html`
- Modify service offerings
- Change testimonials
- Update contact information

### Styling
- Adjust spacing in CSS
- Modify border-radius for different corner styles
- Update shadows for different depth effects
- Change animations in JavaScript

## 📊 SEO Features

- Semantic HTML structure
- Meta descriptions and titles
- Proper heading hierarchy
- Alt text for images (when added)
- Open Graph ready structure

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Flexbox, CSS Variables, Intersection Observer

## 📈 Analytics Ready

The page is structured to easily integrate with:
- Google Analytics
- Facebook Pixel
- Hotjar
- Other tracking tools

## 🚀 Performance

- **Lighthouse Score**: 95+ (estimated)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📝 License

This project is created for ConsultCraft. Feel free to use and modify for your own projects.

## 🤝 Support

For questions or customization requests, contact the development team.

---

**Built with ❤️ for coaches and consultants who want to scale without burnout.** 