# INBLACK Supabase backend

The booking form calls the `create-booking` Edge Function. Contact enquiries are accepted by `create-contact` once the frontend integration is enabled. Both functions validate incoming fields and write requests with the service-role key. Browser clients have no direct table permissions.

## One-time setup

1. Create a Supabase project and install the [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started).
2. Run `supabase login`, then `supabase link --project-ref YOUR_PROJECT_REF` from the project root.
3. Apply the schema and seed services: `supabase db push`.
4. Deploy the functions: `supabase functions deploy create-booking --no-verify-jwt` and `supabase functions deploy create-contact --no-verify-jwt`.
5. Copy `.env.example` to `.env` and add your project URL and anon key. Never put a service-role key in this file or in Vercel's `VITE_` environment variables.
6. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to Vercel's Production and Preview environment variables, then redeploy.

Supabase automatically makes `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` available to deployed Edge Functions. Keep the latter secret. The migration explicitly grants this server-only role access to create appointments; `anon` and `authenticated` clients cannot read or write appointment records.

## Operations

New appointments start as `pending`. Staff can review them in Supabase's Table Editor and update the status to `confirmed`, `cancelled`, or `completed`. New contact messages start as `new` and can be updated to `read` or `resolved`.

Before public launch, enable a CAPTCHA or an equivalent rate limit in front of the Edge Function. The included hidden honeypot filters basic bots, but it is not a full anti-abuse solution. Do not expose `SUPABASE_SERVICE_ROLE_KEY` anywhere in the Vite app, `.env`, or Vercel variables prefixed with `VITE_`.
