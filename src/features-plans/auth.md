# /auth/sign-in and /auth/sign-up

Paths: `src/app/auth/sign-in/[[...sign-in]]/page.tsx`, `src/app/auth/sign-up/[[...sign-up]]/page.tsx`

- Features
  - Clerk authentication (server and client integration)
  - Stars fetched from GitHub API to show social proof
- Data/State
  - `middleware.ts` protects `/dashboard(.*)` routes
  - `Providers` sets Clerk theme based on resolvedTheme
- Smart choices
  - Simple server fetch with `revalidate` for stars (no fragile runtime deps)
  - Dark-mode aware Clerk appearance
