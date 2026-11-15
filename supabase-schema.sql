-- HAGAG ONE central product catalogue
create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name_ar text not null default '',
  name_en text not null default '',
  category text not null,
  price numeric(12,2) not null default 0 check (price >= 0),
  stock integer not null default 0 check (stock >= 0),
  images text[] not null default '{}',
  colors text[] not null default '{}',
  description text not null default '',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.is_hagag_admin()
returns boolean language sql stable security definer set search_path = public
as $$
  select exists(select 1 from public.admin_users where user_id = auth.uid());
$$;

grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;
grant select on public.admin_users to authenticated;

alter table public.products enable row level security;
alter table public.admin_users enable row level security;

drop policy if exists "Public can read active products" on public.products;
create policy "Public can read active products" on public.products
for select using (is_active = true or public.is_hagag_admin());

drop policy if exists "Admins can insert products" on public.products;
create policy "Admins can insert products" on public.products
for insert with check (public.is_hagag_admin());

drop policy if exists "Admins can update products" on public.products;
create policy "Admins can update products" on public.products
for update using (public.is_hagag_admin()) with check (public.is_hagag_admin());

drop policy if exists "Admins can delete products" on public.products;
create policy "Admins can delete products" on public.products
for delete using (public.is_hagag_admin());

drop policy if exists "Admins can read their admin record" on public.admin_users;
create policy "Admins can read their admin record" on public.admin_users
for select using (user_id = auth.uid());

-- Product photo bucket (public read; authenticated admins may upload/update/delete).
insert into storage.buckets (id, name, public)
values ('products', 'products', true)
on conflict (id) do update set public = true;

drop policy if exists "Public can view product photos" on storage.objects;
create policy "Public can view product photos" on storage.objects
for select using (bucket_id = 'products');

drop policy if exists "Admins can upload product photos" on storage.objects;
create policy "Admins can upload product photos" on storage.objects
for insert to authenticated with check (bucket_id = 'products' and public.is_hagag_admin());

drop policy if exists "Admins can update product photos" on storage.objects;
create policy "Admins can update product photos" on storage.objects
for update to authenticated using (bucket_id = 'products' and public.is_hagag_admin());

drop policy if exists "Admins can delete product photos" on storage.objects;
create policy "Admins can delete product photos" on storage.objects
for delete to authenticated using (bucket_id = 'products' and public.is_hagag_admin());

-- Enable Realtime for product changes (run only if not already in publication).
do $$
begin
  alter publication supabase_realtime add table public.products;
exception when duplicate_object then null;
end $$;
