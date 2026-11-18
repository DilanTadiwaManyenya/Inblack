-- Store contact enquiries through the server-side create-contact Edge Function.
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null check (char_length(customer_name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 254),
  phone text check (phone is null or char_length(phone) between 6 and 30),
  subject text not null check (subject in ('appointment', 'services', 'boutique', 'general')),
  message text not null check (char_length(message) between 2 and 2000),
  status text not null default 'new' check (status in ('new', 'read', 'resolved')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index contact_messages_status_idx on public.contact_messages (status);
create index contact_messages_created_at_idx on public.contact_messages (created_at desc);

create trigger contact_messages_set_updated_at before update on public.contact_messages
for each row execute function public.set_updated_at();

-- Browser roles cannot access enquiries. The Edge Function uses the service role.
alter table public.contact_messages enable row level security;
revoke all on table public.contact_messages from anon, authenticated;
grant insert, select on table public.contact_messages to service_role;
