# CourtSignal 🎾

Know before you go.

CourtSignal is a mobile-first tennis court availability PWA. The MVP starts in
Barrhaven, Ottawa and focuses on one core question:

> Where can I play tennis right now?

Built by Matéo Tomeho.

## Tech Stack

- React
- TypeScript
- Vite
- Regular CSS

Supabase, PostgreSQL, Leaflet, OpenStreetMap, and Vercel will be added later as
the MVP grows.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```text
court-signal/
├── public/          Static files served directly by Vite
├── src/             React and CSS source code
│   ├── App.tsx      Main application component
│   ├── App.css      Styles for the app component
│   ├── index.css    Global CSS reset/base styles
│   └── main.tsx     React entry point
├── index.html       HTML document and metadata
├── package.json     Scripts and dependencies
└── vite.config.ts   Vite configuration
```
