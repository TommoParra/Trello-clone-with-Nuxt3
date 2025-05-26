# Nuxt 3 CRUD + Drag & Drop Board
This is a Vue 3 + Nuxt 3 experiment for CRUD operations with a Kanban-style board.  
Originally just CRUD with Pinia, but I got carried away and now includes drag-and-drop and toast notifications.

### It allows:
- ✅ Create and delete tasks and columns  
- ✏️ Edit task names and descriptions, as well as column titles  
- 🔃 Drag and drop tasks **and** columns  
- 🔔 Toast notifications for deletes

## Stack

- Nuxt 3 (SPA mode)
- Vue 3 + Composition API
- Pinia (state + persistence with `useStorage`)
- TailwindCSS
- Nuxt UI (for toasts, buttons, inputs)
- Vite

## File Structure

```bash
.
├── app.vue
├── assets/css/main.css
├── components/boardColumn.vue
├── data/board.json
├── nuxt.config.ts
├── pages/
│ ├── index.vue
│ └── index/tasks/[id].vue
├── stores/boardStore.ts
├── tailwind.config.ts
└── ...
```

## Setup

Install dependencies:
```bash
npm install
```

## Development Server
Run dev server at http://localhost:3000:
```bash
npm run dev
```

## Production
Build for production:
```bash
npm run build
```

Preview locally:
```bash
npm run preview
```

## Deployment
For static hosting (Netlify, Vercel, etc):
```bash
npm run generate
```

Resources
- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Deployment Docs](https://nuxt.com/docs/getting-started/deployment)

