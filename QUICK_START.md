# Quick Start Guide

Get your Tulin website up and running in minutes!

## Prerequisites

Make sure you have installed:
- **Node.js** version 18 or higher
- **npm** (comes with Node.js) or **yarn** or **pnpm**

Check your Node.js version:
```bash
node --version
```

## Installation Steps

### 1. Navigate to the project directory

```bash
cd tuilin-website
```

### 2. Install dependencies

Choose one of the following:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

This will install all necessary packages including:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Lucide React (icons)

### 3. Start the development server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### 4. Open your browser

Navigate to [http://localhost:3000](http://localhost:3000)

You should see the Tulin website running! 🎉

## What's Included

✅ Fully functional Next.js 14 website
✅ Dark/Light/System theme switcher
✅ Smooth scroll animations
✅ Interactive UI components
✅ Responsive mobile design
✅ TypeScript type safety
✅ Production-ready code structure

## Project Structure at a Glance

```
tuilin-website/
├── app/              # Pages and layouts
├── components/       # React components
│   ├── animations/   # Visual effects
│   ├── layout/       # Nav & Footer
│   ├── sections/     # Page sections
│   └── shared/       # Reusable UI
├── contexts/         # React context (theme)
├── lib/             # Utils & hooks
└── public/          # Static files
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Making Changes

### Update Content

Edit files in `components/sections/`:
- `hero.tsx` - Hero section
- `products.tsx` - Products section
- `about.tsx` - About section
- `roadmap.tsx` - Roadmap section
- `contact.tsx` - Contact form

### Update Styles

- Theme colors: `lib/utils.ts` (getThemeTokens function)
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`

### Add New Sections

1. Create new file in `components/sections/`
2. Import in `app/page.tsx`
3. Add navigation link in `components/layout/nav.tsx`

## Build for Production

When you're ready to deploy:

```bash
# Build the application
npm run build

# Test the production build locally
npm run start
```

## Deployment Options

### Vercel (Easiest)
1. Push code to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Troubleshooting

### Port 3000 already in use

```bash
# Use a different port
PORT=3001 npm run dev
```

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

## Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Contact: hello@tulin.io

## Next Steps

1. ✅ Get the site running locally
2. 📝 Customize content and styles
3. 🎨 Add your branding
4. 🚀 Deploy to production
5. 📊 Monitor performance

Happy coding! 🚀
