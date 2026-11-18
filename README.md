# INBLACK Beauty & Wellness

[![CI](https://github.com/DilanTadiwaManyenya/Inblack/actions/workflows/ci.yml/badge.svg)](https://github.com/DilanTadiwaManyenya/Inblack/actions/workflows/ci.yml)

INBLACK is a responsive React/Vite website for beauty services, wellness treatments, appointment requests and a curated boutique.

## Features

- Service catalogue for hair, nails, makeup, massage and wellness
- Supabase-backed appointment-request flow
- Boutique catalogue with contextual product enquiries
- Responsive navigation and keyboard-accessible page structure
- Route-specific metadata, error recovery and branded 404 handling
- Vercel SPA routing and production security headers
- Automated tests, linting and builds through GitHub Actions

## Local setup

1. Install dependencies with `npm ci`.
2. Copy `.env.example` to `.env`.
3. Replace the public Supabase placeholders when a project is available.
4. Start the development server with `npm run dev`.

Only `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` belong in the frontend environment. Never add a Supabase service-role key to a Vite environment file.

## Quality commands

```text
npm test
npm run lint
npm run build
npm run preview
```

GitHub Actions runs tests, ESLint and the production build for every push and pull request targeting `master`.

## Project structure

```text
src/components/   Shared interface components
src/data/         Service and boutique catalogue data
src/lib/          Supabase and booking utilities
src/pages/        Routed pages
src/sections/     Homepage sections
supabase/         Database migrations and Edge Functions
test/             Node test suite
public/           Static browser and crawler assets
```

## Supabase backend

The backend source includes:

- `create-booking`, which validates appointment requests and stores them server-side
- `create-contact`, which validates contact enquiries and stores them server-side
- append-only migrations for services, appointments and contact messages
- row-level security that prevents browser roles from reading or writing private records

The Contact frontend intentionally remains disconnected until a Supabase project has been created and the backend has been deployed. See [supabase/README.md](supabase/README.md) for setup and deployment commands.

## Deployment

The frontend is configured for Vercel through `vercel.json`. Add the following variables to both Preview and Production environments after creating Supabase:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Redeploy after changing environment variables. Confirm the production domain before adding a canonical URL or sitemap.

## Before public launch

- Replace the placeholder phone number and confirm the email/location details.
- Create and link the Supabase project.
- Apply migrations and deploy both Edge Functions.
- Connect and test the Contact form.
- Add CAPTCHA or equivalent rate limiting to public form endpoints.
- Complete a live desktop/mobile smoke test on the final production domain.
