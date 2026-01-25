# 🚀 AUTO MIND STUDIO - High-Performance Web Application

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-95%2B-green)](https://developers.google.com/web/tools/lighthouse)

Професійний вебсайт для AUTO MIND STUDIO з повною оптимізацією для швидкості та SEO.

## ✨ Особливості

- ⚡ **Надшвидкий** - Lighthouse Performance Score 90+
- 🎯 **SEO Оптимізований** - 100/100 Lighthouse SEO Score
- 📱 **Mobile-First** - Повністю responsive design
- ♿ **Доступний** - WCAG 2.1 compliant
- 🌐 **Multilingual** - Hebrew (RTL) + English support
- 🔒 **Безпечний** - Всі security headers налаштовані
- 🎨 **Сучасний UI** - Tailwind CSS + Framer Motion
- 📊 **Analytics Ready** - Google Analytics 4 + Web Vitals

## 🏗️ Технології

### Core
- **Next.js 14.2** - React framework з SSR/SSG
- **React 18.2** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS

### Performance
- **SWC Compiler** - 17x швидше за Babel
- **Image Optimization** - AVIF/WebP support
- **Code Splitting** - Оптимальні bundle sizes
- **Dynamic Imports** - Lazy loading components

### Animation & 3D
- **Framer Motion** - Smooth animations
- **Three.js** - 3D graphics
- **Lottie** - Vector animations

### UI Components
- **Radix UI** - Accessible components
- **Lucide React** - Modern icons
- **React Icons** - Icon library

## 🚀 Швидкий старт

### Prerequisites
- Node.js 18+ 
- npm або yarn

### Installation

```bash
# Клонувати репозиторій
git clone https://github.com/yourusername/auto-mind-studio.git

# Перейти в директорію
cd auto-mind-studio

# Встановити залежності
npm install

# Створити .env.local
cp .env.local.example .env.local

# Редагувати .env.local з вашими значеннями
```

### Development

```bash
# Запустити development server
npm run dev

# Відкрити http://localhost:3000
```

### Production Build

```bash
# Створити production build
npm run build

# Запустити production server
npm start

# Тестувати performance
npm run test:perf
```

## 📁 Структура проекту

```
auto-mind-studio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (SEO, meta tags)
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # 404 page
│   ├── manifest.ts          # PWA manifest
│   ├── robots.ts            # robots.txt generator
│   ├── sitemap.ts           # sitemap.xml generator
│   ├── web-vitals.tsx       # Performance monitoring
│   ├── privacy/             # Privacy policy page
│   ├── terms/               # Terms of service page
│   └── api/                 # API routes
│       ├── analytics/       # Web Vitals endpoint
│       ├── contact/         # Contact form
│       └── revalidate/      # ISR revalidation
├── src/
│   ├── components/          # React components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   └── styles/              # Global styles
├── public/                  # Static assets
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── scripts/                 # Utility scripts
│   └── test-performance.js
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 95+ ⚡
- **Accessibility**: 95+ ♿
- **Best Practices**: 100 ✅
- **SEO**: 100 🎯

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **FCP** (First Contentful Paint): < 1.8s
- **TTI** (Time to Interactive): < 3.8s

## 🎯 SEO Features

### Technical SEO
- ✅ Optimized meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ robots.txt
- ✅ XML Sitemap
- ✅ 404 page
- ✅ Language tags (Hebrew RTL)

### Structured Data (Schema.org)
- ✅ Organization markup
- ✅ WebSite markup
- ✅ ProfessionalService markup
- ✅ BreadcrumbList
- ✅ JSON-LD format

### Image Optimization
- ✅ AVIF format support
- ✅ WebP fallback
- ✅ Responsive images
- ✅ Lazy loading
- ✅ Optimized sizes

## 🔧 Configuration

### Environment Variables

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://auto-mind.solutions
NEXT_PUBLIC_SITE_NAME="AUTO MIND STUDIO"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Email (Contact Form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=hello@auto-mind.solutions

# Security
REVALIDATE_SECRET=your-secret-here
```

## 📦 Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Testing & Optimization
npm run test:perf        # Test performance
npm run analyze          # Analyze bundle size
npm run clean            # Clean build files
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```bash
# Build image
docker build -t auto-mind-studio .

# Run container
docker run -p 3000:3000 auto-mind-studio
```

Детальні інструкції: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📚 Documentation

- [Performance Optimization Guide](./PERFORMANCE_OPTIMIZATION.md)
- [SEO Checklist](./SEO_CHECKLIST.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Optimization Summary](./OPTIMIZATION_SUMMARY.md)

## 🧪 Testing

### Local Testing
```bash
# Build production version
npm run build

# Start server
npm start

# Open browser
http://localhost:3000

# Run performance tests
npm run test:perf
```

### Online Testing
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/
- **Lighthouse**: Chrome DevTools → Lighthouse tab

## 🛠️ Optimization Features

### Code Splitting
- Vendor chunks (node_modules)
- React chunks (React + ReactDOM)
- Three.js chunk (3D library)
- Framer Motion chunk
- Common chunks (shared code)

### Caching Strategy
- Static assets: 1 year cache
- Images: 1 year cache
- Pages: ISR with revalidation
- API routes: Custom cache headers

### Security Headers
- HSTS (HTTP Strict Transport Security)
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- CSP (Content Security Policy)

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Analytics & Monitoring

### Included
- Web Vitals monitoring
- Custom analytics endpoint
- Error tracking ready

### Recommended
- Google Analytics 4
- Google Search Console
- Bing Webmaster Tools
- Sentry (error tracking)
- UptimeRobot (uptime monitoring)

## 🔐 Security

- HTTPS enforced
- Security headers configured
- No sensitive data in client code
- Environment variables secured
- Regular dependency updates
- CSRF protection
- Rate limiting ready

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines.

## 📄 License

Copyright © 2026 AUTO MIND STUDIO. All rights reserved.

## 👥 Team

**AUTO MIND STUDIO**
- Website: https://auto-mind.solutions
- Email: hello@auto-mind.solutions

## 🙏 Acknowledgments

- Next.js team for amazing framework
- Vercel for hosting platform
- All open-source contributors

---

**Built with ❤️ by AUTO MIND STUDIO**

**Last Updated**: 2026-01-23
**Version**: 1.0.0
**Status**: ✅ Production Ready
