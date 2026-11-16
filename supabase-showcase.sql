-- Run after supabase-schema.sql to enable admin-managed showcase images and text.
create table if not exists public.showcase_items (
  id uuid primary key default gen_random_uuid(),
  item_type text not null check (item_type in ('image', 'text')),
  content text not null check (length(btrim(content)) > 0),
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

grant select on public.showcase_items to anon, authenticated;
grant insert, update, delete on public.showcase_items to authenticated;
alter table public.showcase_items enable row level security;

drop policy if exists "Public can read showcase items" on public.showcase_items;
create policy "Public can read showcase items" on public.showcase_items
for select using (true);

drop policy if exists "Admins can insert showcase items" on public.showcase_items;
create policy "Admins can insert showcase items" on public.showcase_items
for insert with check (public.is_hagag_admin());

drop policy if exists "Admins can update showcase items" on public.showcase_items;
create policy "Admins can update showcase items" on public.showcase_items
for update using (public.is_hagag_admin()) with check (public.is_hagag_admin());

drop policy if exists "Admins can delete showcase items" on public.showcase_items;
create policy "Admins can delete showcase items" on public.showcase_items
for delete using (public.is_hagag_admin());

do $$
begin
  alter publication supabase_realtime add table public.showcase_items;
exception when duplicate_object then null;
end $$;

-- Seed the strip from existing product cover images once, so it remains populated.
insert into public.showcase_items (item_type, content, sort_order)
select 'image', p.images[1], row_number() over (order by p.created_at, p.id)::integer - 1
from public.products p
where p.is_active = true
  and coalesce(p.images[1], '') <> ''
  and not exists (select 1 from public.showcase_items);
