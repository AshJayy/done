
# done

A minimal task tracker demo app with a NestJS backend and a Next.js frontend.

## How to run

Prerequisites: Node.js (16+ recommended) and npm or yarn.

1. Install and run the backend

```bash
cd done-backend
npm install
npm run start
```

API base: `http://localhost:3001`

1. Install and run the frontend

```bash
cd done-frontend
npm install
npm run dev
```

Frontend default: `http://localhost:3000` (Next default)

## API (implemented)

All routes are under `/tasks`:

- GET /tasks — list tasks
- POST /tasks — create a task
- PATCH /tasks/:id — update a task
- DELETE /tasks/:id — remove a task

## Test

```bash
cd done-frontend
npm run test

cd done-backend
npm run test
```
