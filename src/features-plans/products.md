# /dashboard/product and /dashboard/product/[productId]

Paths: `src/app/dashboard/product/page.tsx`, `src/app/dashboard/product/[productId]/page.tsx`

- Features
  - Server components fetch from `fakeProducts` (mock API)
  - Data table with pagination, filters, and faceted search
  - Create/Edit product form
- Data/State
  - Listing uses `searchParamsCache` + `nuqs` for typed URL filters
  - Data provided by `constants/mock-api.ts` with faker + match-sorter
- Smart choices
  - Mock API with pagination/search to mimic real backend
  - Suspense and skeletons for table loading states
  - Clean separation of table columns/options and view page
