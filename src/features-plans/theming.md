# Theming system

Paths: `src/components/layout/ThemeToggle/theme-provider.tsx`, `src/components/active-theme.tsx`, `src/app/theme.css`, `src/app/globals.css`, `src/components/layout/ThemeToggle/theme-toggle.tsx`, `src/components/theme-selector.tsx`

- Features
  - next-themes controls light/dark via `.dark` class
  - ActiveThemeProvider controls brand variants using body classes `theme-<name>` and cookie `active_theme`
  - ModeToggle uses View Transitions for smooth theme switch
  - ThemeSelector updates brand (default/blue/green/amber/mono, scaled variants)
- Data/State
  - `active_theme` cookie is read on the server in `RootLayout` to pre-apply classes
  - Client provider sets/removes theme-* classes and `theme-scaled`
- Smart choices
  - Separation of color-scheme vs brand palette
  - OKLCH tokens in CSS, scalable radii/typography for `-scaled` themes
  - No-FOUC meta theme-color pre-hydration script
