# /dashboard/overview

Path: `src/app/dashboard/overview/layout.tsx`

- Features
  - Parallel routes: `@sales`, `@bar_stats`, `@area_stats`, `@pie_stats`
  - KPI cards (revenue, customers, accounts, growth)
  - Uses `components/ui/chart` primitives
- Data/State
  - Sales list uses `recentSalesData` from `src/constants/data.ts`
  - Charts are demo-driven
- Smart choices
  - Parallel routes for independent streaming and code-splitting
  - Skeletons for each widget for smooth loading
