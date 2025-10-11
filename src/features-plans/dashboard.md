# Dashboard layout

Path: `src/app/dashboard/layout.tsx`

- Features
  - Sidebar with collapsible modes and cookie persistence (`sidebar_state`)
  - Header with breadcrumbs, search, user nav, theme toggle, theme selector, GitHub CTA
  - Command palette (KBar) with navigation + theme actions
- Data/State
  - Reads `sidebar_state` cookie to set default open state
  - KBar actions generated from `navItems`
- Smart choices
  - Sidebar componentized with accessible, responsive variants
  - Command palette centralizes nav and theme commands

## Pages under /dashboard
- overview: parallel routes for charts and recent sales
- product: server-driven table with filters via search params
- product/[id]: edit/create product via mock API
- kanban: client store (Zustand) with persistence
- profile: profile view and form
