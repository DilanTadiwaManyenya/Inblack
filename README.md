# INBLACK Beauty & Wellness

INBLACK is a React/Vite website with a Supabase-backed appointment-request flow.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and replace both public Supabase values.
3. Start the site with `npm run dev`.

The client only receives `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Never add a Supabase service-role key to a Vite environment file.

## Booking backend

The backend is contained in `supabase/`:

- `migrations/20260810000000_create_booking_backend.sql` creates and seeds services and appointments.
- `functions/create-booking/index.ts` validates public booking requests and writes them server-side.

For Supabase setup and deployment commands, see `supabase/README.md`.
