-- INBLACK booking backend. Run with `supabase db push` after linking your project.
create extension if not exists pgcrypto;

create type public.appointment_status as enum ('pending', 'confirmed', 'cancelled', 'completed');

create table public.services (
  id bigint generated always as identity primary key,
  slug text not null unique check (slug ~ '^[a-z0-9-]+$'),
  name text not null,
  category text not null check (category in ('Hair', 'Nails', 'Makeup', 'Massage & Therapy')),
  duration_minutes integer not null check (duration_minutes > 0 and duration_minutes <= 480),
  price_cents integer not null check (price_cents >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  service_id bigint not null references public.services(id),
  customer_name text not null check (char_length(customer_name) between 2 and 120),
  phone text not null check (char_length(phone) between 6 and 30),
  email text not null check (char_length(email) between 5 and 254),
  preferred_date date not null check (preferred_date >= current_date),
  preferred_time time not null,
  message text check (char_length(message) <= 2000),
  status public.appointment_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index appointments_preferred_date_idx on public.appointments (preferred_date);
create index appointments_status_idx on public.appointments (status);
create index appointments_service_id_idx on public.appointments (service_id);

create or replace function public.set_updated_at()
returns trigger language plpgsql security invoker set search_path = public as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger services_set_updated_at before update on public.services
for each row execute function public.set_updated_at();
create trigger appointments_set_updated_at before update on public.appointments
for each row execute function public.set_updated_at();

-- The browser has no direct table access. Only the Edge Function's service-role client can create bookings.
alter table public.services enable row level security;
alter table public.appointments enable row level security;

-- The public browser role gets no table access. The create-booking Edge Function
-- uses Supabase's service role, which bypasses RLS but still needs SQL grants.
revoke all on table public.services, public.appointments from anon, authenticated;
grant usage on schema public to service_role;
grant select on table public.services to service_role;
grant insert, select on table public.appointments to service_role;
grant usage, select on all sequences in schema public to service_role;

insert into public.services (slug, name, category, duration_minutes, price_cents) values
  ('hair-styling', 'Hair Styling', 'Hair', 60, 2500),
  ('cuts-trims', 'Cuts & Trims', 'Hair', 45, 2000),
  ('braiding', 'Braiding', 'Hair', 120, 4000),
  ('manicure', 'Manicure', 'Nails', 45, 2000),
  ('pedicure', 'Pedicure', 'Nails', 60, 2500),
  ('gel-nails', 'Gel Nails', 'Nails', 75, 3000),
  ('everyday-makeup', 'Everyday Makeup', 'Makeup', 45, 2500),
  ('bridal-makeup', 'Bridal Makeup', 'Makeup', 90, 6000),
  ('event-makeup', 'Event Makeup', 'Makeup', 60, 4000),
  ('relaxation-massage', 'Relaxation Massage', 'Massage & Therapy', 60, 3500),
  ('deep-tissue', 'Deep Tissue Massage', 'Massage & Therapy', 60, 4500),
  ('wellness-session', 'Wellness Session', 'Massage & Therapy', 60, 3500)
on conflict (slug) do update set
  name = excluded.name, category = excluded.category, duration_minutes = excluded.duration_minutes,
  price_cents = excluded.price_cents, is_active = true;
