-- CourtSignal database schema

-- 1. Extensions
create extension if not exists "pgcrypto";

-- 2. Tables
create table public.courts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  address text,
  latitude numeric not null,
  longitude numeric not null,
  total_courts integer not null check (total_courts > 0),
  neighbourhood text not null,
  map_x_percent numeric not null check (map_x_percent >= 0 and map_x_percent <= 100),
  map_y_percent numeric not null check (map_y_percent >= 0 and map_y_percent <= 100),
  created_at timestamptz not null default now()
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  court_id uuid not null references public.courts(id) on delete cascade,
  available_courts integer not null check (available_courts >= 0),
  waiting_groups integer not null check (waiting_groups >= 0),
  created_at timestamptz not null default now()
);

-- 3. Row Level Security
alter table public.courts enable row level security;
alter table public.reports enable row level security;

create policy "Anyone can read courts"
on public.courts
for select
to anon
using (true);

create policy "Anyone can read reports"
on public.reports
for select
to anon
using (true);

create policy "Anyone can insert reports"
on public.reports
for insert
to anon
with check (true);

-- 4. Views
create view public.courts_with_latest_report as
select distinct on (courts.id)
  courts.id,
  courts.slug,
  courts.name,
  courts.address,
  courts.latitude,
  courts.longitude,
  courts.total_courts,
  courts.neighbourhood,
  courts.map_x_percent,
  courts.map_y_percent,
  reports.available_courts,
  reports.waiting_groups,
  reports.created_at as last_reported_at
from public.courts
left join public.reports
  on reports.court_id = courts.id
order by courts.id, reports.created_at desc;