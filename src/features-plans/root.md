# Root layout and app shell

Path: `src/app/layout.tsx`

- Features
  - Global theme provider via `next-themes`
  - Active brand theme via `ActiveThemeProvider` (cookie `active_theme`)
  - Nuqs adapter for typed search params in RSCs
  - Top loader, global fonts, global CSS and theme CSS
  - Toast system via `sonner`
- Data/State
  - Reads `active_theme` cookie server-side to set class names
  - Client providers wrap children
- Smart choices
  - Meta theme-color adjusted before hydration (no flash)
  - Split between color-scheme (light/dark) and brand theme (default/blue/...)
  - View-transition effect for theme toggle


