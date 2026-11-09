alter table public.reviews
  add column if not exists company_reply text,
  add column if not exists company_replied_at timestamptz;

