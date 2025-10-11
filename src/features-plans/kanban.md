# /dashboard/kanban

Path: `src/app/dashboard/kanban/page.tsx`

- Features
  - Drag-and-drop Kanban board (dnd-kit)
  - Columns and tasks with create/update/delete
- Data/State
  - Client state via Zustand store `features/kanban/utils/store.ts`
  - Persisted to localStorage with `persist` (name: `task-store`)
- Smart choices
  - Minimal initial tasks and columns for demo
  - Clear action set: add/remove/update column and tasks; drag state tracked
