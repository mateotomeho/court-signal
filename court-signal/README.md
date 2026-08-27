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
- Supabase and PostgreSQL
- Leaflet and OpenStreetMap
- Vercel

## Current MVP

- View public tennis courts in the Barrhaven/Ottawa area
- See latest community-reported availability for each court
- Submit a court status update
- Persist updates in Supabase so multiple devices see the same data
- View court locations on a Leaflet map

## Deployment

CourtSignal is deployed with Vercel.

Live app:

```text
https://courtsignal-app.vercel.app/
```

Required environment variables:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

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
├── public/            Static files served directly by Vite
├── src/               React, TypeScript, and CSS source code
│   ├── api/           Supabase read/write functions
│   ├── components/    Reusable UI components
│   ├── data/          Local fallback court data
│   ├── lib/           Shared library setup, including Supabase client
│   ├── types/         TypeScript types
│   ├── utils/         Helper functions
│   ├── App.tsx        Main application component
│   ├── App.css        Main application styles
│   ├── index.css      Global CSS reset/base styles
│   └── main.tsx       React entry point
├── supabase/          Database schema and seed SQL
├── index.html         HTML document and metadata
├── package.json       Scripts and dependencies
└── vite.config.ts     Vite configuration
```
