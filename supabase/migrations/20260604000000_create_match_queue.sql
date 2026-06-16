-- match_queue: real-time matchmaking queue for LinguaLens
-- Blocked since 2026-05-07 — deployed 2026-06-04
create table if not exists match_queue (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  username text not null,
  language text not null,
  tier text not null default 'Bronze',
  joined_at timestamptz default now() not null,
  matched_with uuid references auth.users(id),
  matched_at timestamptz
);

alter table match_queue enable row level security;

drop policy if exists "queue_insert" on match_queue;
drop policy if exists "queue_select" on match_queue;
drop policy if exists "queue_update" on match_queue;
drop policy if exists "queue_delete" on match_queue;

create policy "queue_insert" on match_queue
  for insert with check (auth.uid() = user_id);

create policy "queue_select" on match_queue
  for select using (true);

create policy "queue_update" on match_queue
  for update using (true);

create policy "queue_delete" on match_queue
  for delete using (auth.uid() = user_id);
