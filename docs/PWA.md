# PWA (Progressive Web App) Documentation

This document outlines the PWA implementation and best practices for the Socioly application.

## Overview

Socioly is implemented as a fully-featured Progressive Web App (PWA) following industry best practices. This enables users to:

- Install the app on their devices
- Use the app offline
- Experience native app-like performance
- Receive push notifications (when implemented)
- Access the app from their home screen

## Features Implemented

### ✅ Core PWA Features

1. **Service Worker**
   - Automatic service worker generation via `@ducanh2912/next-pwa`
   - Offline support with intelligent caching strategies
   - Background sync capabilities

2. **Web App Manifest**
   - Complete manifest.json with all required fields
   - App shortcuts for quick navigation
   - Share target support for native sharing
   - Screenshots for app store listings

3. **Offline Support**
   - Custom offline page (`/offline`)
   - Cached static assets
   - Network-first strategy for API calls
   - Cache-first for static resources

4. **Install Prompt**
   - Custom install prompt component
   - Respects user dismissal preferences
   - Shows after 7 days if previously dismissed

5. **Meta Tags**
   - Comprehensive PWA meta tags
   - Apple-specific tags for iOS
   - Microsoft tile configuration
   - Theme color support (light/dark mode)

6. **Icons**
   - Multiple icon sizes for all platforms
   - Apple touch icons
   - Favicons
   - Microsoft tiles

## Caching Strategies

The service worker implements different caching strategies for optimal performance:

- **Cache First**: Static assets (fonts, images, audio, video)
- **Network First**: API calls, dynamic pages
- **Stale While Revalidate**: CSS, JavaScript, fonts
- **Network Only**: Authentication endpoints

## Icon Generation

To generate all required PWA icons:

1. Place a 1024x1024px PNG icon at `public/assets/socioly-favicon.png`
2. Run: `npm run generate-icons`
3. All icons will be generated in the `public/` directory

Required icon sizes:
- 16x16, 32x32 (favicons)
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512 (PWA icons)
- 180x180 (Apple touch icon)
- 70x70, 144x144, 150x150, 310x310, 310x150 (Microsoft tiles)

## Testing PWA Features

### Local Testing

1. Build the app: `npm run build`
2. Start production server: `npm start`
3. Open in browser (Chrome recommended)
4. Open DevTools > Application tab
5. Check:
   - Service Worker registration
   - Manifest configuration
   - Cache storage
   - Offline functionality

### Lighthouse Audit

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Progressive Web App" category
4. Run audit
5. Target score: 100/100

### Manual Testing Checklist

- [ ] App can be installed on mobile devices
- [ ] App works offline (visit pages, then go offline)
- [ ] Offline page displays when offline
- [ ] Install prompt appears (if not already installed)
- [ ] App shortcuts work
- [ ] Theme color matches app design
- [ ] Icons display correctly on home screen
- [ ] Splash screen shows on mobile
- [ ] App opens in standalone mode (no browser UI)

## Configuration Files

### `next.config.ts`
- PWA plugin configuration
- Workbox options
- Runtime caching strategies
- Offline fallback page

### `public/manifest.json`
- App metadata
- Icons configuration
- Shortcuts
- Share target
- Screenshots

### `public/browserconfig.xml`
- Microsoft tile configuration
- Windows-specific settings

### `.well-known/assetlinks.json`
- Android app linking
- Update with your domain when deploying

## Deployment Considerations

### HTTPS Required
PWAs require HTTPS in production. Ensure your hosting provider supports HTTPS.

### Service Worker Updates
- Service workers are automatically updated on each build
- Users receive updates on next page load
- Old caches are automatically cleaned up

### Domain Configuration
Update the following files with your production domain:
- `.well-known/assetlinks.json`
- `public/manifest.json` (if using absolute URLs)

## Browser Support

- ✅ Chrome/Edge (Full support)
- ✅ Firefox (Full support)
- ✅ Safari (iOS 11.3+, macOS 11+)
- ✅ Samsung Internet (Full support)
- ⚠️ Opera (Full support)

## Performance Metrics

Target PWA metrics:
- **Lighthouse PWA Score**: 100/100
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1
- **Largest Contentful Paint**: < 2.5s

## Troubleshooting

### Service Worker Not Registering
- Ensure app is served over HTTPS (or localhost)
- Check browser console for errors
- Verify `next.config.ts` PWA configuration

### Icons Not Showing
- Verify all icon files exist in `public/` directory
- Check manifest.json icon paths
- Clear browser cache and service worker

### Offline Page Not Working
- Verify `/offline` route exists
- Check service worker fallback configuration
- Test in production build (not dev mode)

### Install Prompt Not Showing
- Ensure manifest.json is valid
- Check that service worker is registered
- Verify app meets installability criteria
- Clear browser data and retry

## Future Enhancements

Potential PWA improvements:
- [ ] Push notifications
- [ ] Background sync
- [ ] Periodic background sync
- [ ] Web Share API integration
- [ ] Badge API for notifications
- [ ] File System Access API
- [ ] Web Share Target API (already configured)

## Resources

- [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev PWA](https://web.dev/progressive-web-apps/)
- [Next PWA Documentation](https://github.com/DuCanhGH/next-pwa)
- [Workbox Documentation](https://developers.google.com/web/tools/workbox)

