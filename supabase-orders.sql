create table if not exists public.store_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'pending'
    check (status in ('pending', 'confirmed', 'cancelled')),
  customer_first_name text not null,
  customer_last_name text not null,
  customer_phone text not null,
  country text not null default 'Egypt',
  governorate text not null,
  city text not null,
  street_address text not null,
  address_details text,
  postal_code text,
  payment_method text not null
    check (payment_method in ('cod', 'manual_transfer')),
  items jsonb not null
    check (jsonb_typeof(items) = 'array'),
  subtotal numeric(12, 2)
    check (subtotal is null or subtotal >= 0),
  shipping_fee numeric(12, 2) not null
    check (shipping_fee >= 0),
  total numeric(12, 2)
    check (total is null or total >= 0)
);

alter table public.store_orders enable row level security;

drop policy if exists store_orders_public_insert on public.store_orders;
create policy store_orders_public_insert
  on public.store_orders
  for insert
  to anon, authenticated
  with check (status = 'pending');

revoke all on table public.store_orders from anon, authenticated;
grant insert on table public.store_orders to anon, authenticated;
