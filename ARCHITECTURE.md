# Architecture Overview

This document explains the technical architecture and design decisions behind the Tulin website.

## Core Technologies

### Next.js 14 (App Router)
- **Why**: Server-side rendering, optimal performance, modern React features
- **Benefits**: SEO-friendly, fast page loads, automatic code splitting
- **Trade-offs**: Requires understanding of server vs client components

### TypeScript
- **Why**: Type safety, better developer experience, fewer runtime errors
- **Benefits**: IntelliSense, refactoring support, self-documenting code
- **Trade-offs**: Slightly longer development time initially

### Tailwind CSS
- **Why**: Utility-first, highly customizable, consistent design system
- **Benefits**: Fast development, small bundle size, responsive design
- **Trade-offs**: HTML can look verbose

## Design Patterns

### 1. Component Organization

```
components/
├── animations/    # Pure visual effects, no business logic
├── layout/        # Page structure components (Nav, Footer)
├── sections/      # Page sections with content
└── shared/        # Reusable UI primitives
```

**Rationale**: Clear separation of concerns makes the codebase easy to navigate and maintain.

### 2. Theme System

**Implementation**:
- React Context for theme state
- CSS variables avoided (for dynamic theme tokens)
- Theme tokens computed in JavaScript for full control

**Why this approach**:
- Supports complex color calculations
- Easy to extend with new themes
- No FOUC (flash of unstyled content)
- Responsive to system preferences

### 3. Animation Strategy

**Techniques used**:
1. **Intersection Observer** (scroll reveal)
   - Triggers animations when elements enter viewport
   - Minimal performance impact
   - Graceful degradation

2. **RequestAnimationFrame** (continuous animations)
   - Canvas animations (gradient background)
   - Orb floating effects
   - Butter-smooth 60fps

3. **CSS Transitions** (interactive states)
   - Hover effects
   - Theme transitions
   - Button interactions

**Performance considerations**:
- Animations run on GPU (transform, opacity)
- RequestAnimationFrame paused when tab inactive
- Intersection Observer unobserves after reveal

### 4. State Management

**Approach**: Minimal state, local where possible

- **Theme**: React Context (global)
- **Forms**: Local component state
- **UI state**: Local component state (nav open, focused input)

**Why no Redux/Zustand**:
- Application is mostly presentational
- No complex shared state
- Simpler codebase, easier onboarding

## File Structure Philosophy

### Flat Component Structure
Each component is self-contained in its own file with a clear single responsibility.

```typescript
// ✅ Good - Clear, single purpose
export function MagBtn({ children, onClick }: Props) {
  // Implementation
}

// ❌ Avoid - Multiple exports, unclear purpose
export function Button() {}
export function FancyButton() {}
export const buttonUtils = {}
```

### Hook Organization
Custom hooks are isolated in `lib/hooks/` for reusability.

```typescript
// lib/hooks/use-reveal.ts
export const useReveal = (threshold: number) => {
  // Hook logic
}
```

### Utility Functions
Shared utilities live in `lib/utils.ts`:
- `cn()` - Class name merging
- `getThemeTokens()` - Theme token generation
- `scrollTo()` - Smooth scroll helper

## Performance Optimizations

### 1. Code Splitting
- Automatic with Next.js App Router
- Each route loads only necessary code
- Shared components bundled efficiently

### 2. Image Optimization
- Ready for Next.js Image component
- Lazy loading supported
- Modern format support (WebP, AVIF)

### 3. Animation Performance
```typescript
// GPU-accelerated properties only
style={{
  transform: `translate(${x}px, ${y}px)`,  // ✅ GPU
  opacity: isVisible ? 1 : 0,              // ✅ GPU
  // Avoid: top, left, width, height       // ❌ CPU
}}
```

### 4. Bundle Size
- Tree-shaking enabled
- Minimal dependencies
- Icons imported individually from lucide-react

## Scalability Considerations

### Adding New Features

**New Page Section**:
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add nav link if needed

**New Reusable Component**:
1. Create in `components/shared/`
2. Export from file
3. Import where needed

**New Theme**:
1. Add option to `ThemeContext`
2. Update `getThemeTokens()` function
3. Test all components

### Multi-page Support
Current structure is single-page. To add pages:

```
app/
├── page.tsx              # Home
├── about/
│   └── page.tsx         # About page
└── products/
    └── page.tsx         # Products page
```

Navigation would need updates to use Next.js `<Link>`.

## Accessibility

### Current Implementation
- Semantic HTML (`nav`, `section`, `footer`)
- Keyboard navigation (tab, enter)
- Focus visible states
- ARIA labels where needed

### Future Improvements
- Skip to content link
- Screen reader announcements
- Reduced motion support
- Focus trap in mobile menu

## Browser Support

**Target**: Modern browsers (2 years back)
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Features requiring polyfills**:
- None (all features widely supported)

## Testing Strategy

### Current State
- No automated tests yet
- Manual testing on multiple devices

### Recommended Additions
1. **Unit tests** (Jest + React Testing Library)
   - Reusable components
   - Utility functions
   - Hooks

2. **E2E tests** (Playwright)
   - Navigation flow
   - Form submission
   - Theme switching

3. **Visual regression** (Percy/Chromatic)
   - Component snapshots
   - Theme variations

## Security Considerations

### Current Implementation
- No sensitive data handling
- No authentication required
- Form data client-side only (no API yet)

### Production Checklist
- [ ] Add CSP headers
- [ ] Implement rate limiting on contact form
- [ ] Add CAPTCHA if spam becomes issue
- [ ] Sanitize user inputs
- [ ] Add proper error boundaries

## Deployment

### Build Process
```bash
npm run build
```

Outputs:
- Static assets in `public/`
- Optimized pages in `.next/`
- Automatic image optimization
- CSS minification and purging

### Environment Variables
Currently none required. When needed:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.tulin.io
```

### Recommended Hosting
1. **Vercel** (optimized for Next.js)
2. **Netlify**
3. **AWS Amplify**

## Monitoring & Analytics

### Ready for Integration
The architecture supports easy integration of:
- Google Analytics
- Plausible
- Vercel Analytics
- Sentry (error tracking)

Add in `app/layout.tsx`:
```typescript
import Analytics from '@/components/analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Future Enhancements

### Short Term
1. Add blog section
2. Integrate CMS (Contentful, Sanity)
3. Add proper contact form API
4. Implement page transitions

### Long Term
1. Multi-language support (i18n)
2. Admin dashboard
3. Real-time features (WebSocket)
4. Advanced analytics

## Code Quality

### Linting
- ESLint configured
- Next.js recommended rules
- TypeScript strict mode

### Formatting
Recommended: Add Prettier
```json
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2
}
```

### Pre-commit Hooks
Recommended: Add Husky + lint-staged
```json
{
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

## Troubleshooting Common Issues

### Build Errors

**"Cannot find module"**
```bash
rm -rf node_modules .next
npm install
```

**TypeScript errors after update**
```bash
npm install @types/node @types/react@latest
```

### Performance Issues

**Slow page loads**
- Check bundle analyzer: `npm run analyze`
- Lazy load heavy components
- Optimize images

**Janky animations**
- Check GPU usage in DevTools
- Reduce animation complexity
- Use `will-change: transform`

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Review and fix security vulnerabilities
- Optimize images in public folder
- Clean up unused code

### Upgrade Path
When upgrading Next.js:
1. Read changelog carefully
2. Update to latest patch version first
3. Test thoroughly before minor/major updates
4. Use codemods provided by Next.js team

## Contributing Guidelines

### Code Style
- Use TypeScript for all new files
- Follow existing component patterns
- Add comments for complex logic
- Keep functions small and focused

### Git Workflow
1. Create feature branch
2. Make changes
3. Test locally
4. Submit pull request
5. Code review
6. Merge to main

## Conclusion

This architecture prioritizes:
1. **Developer Experience**: Easy to understand and modify
2. **Performance**: Fast load times, smooth animations
3. **Maintainability**: Clear structure, typed code
4. **Scalability**: Easy to add features

The codebase is production-ready and follows industry best practices while remaining simple enough for rapid iteration.
