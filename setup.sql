-- Run this entire file in Supabase SQL Editor

-- 1. Profile (one row)
create table if not exists profile (
  id             bigint generated always as identity primary key,
  name           text,
  alias          text,
  bio            text,
  tagline        text,
  specialization text,
  tools          text,
  cv_link        text,
  availability   boolean default true
);

-- 2. Skills
create table if not exists skills (
  id            bigint generated always as identity primary key,
  name          text not null,
  icon          text,
  description   text,
  tags          text[] default '{}',
  display_order int default 0
);

-- 3. Projects
create table if not exists projects (
  id            bigint generated always as identity primary key,
  title         text not null,
  type          text,
  description   text,
  link          text,
  tags          text[] default '{}',
  display_order int default 0
);

-- 4. Experience
create table if not exists experience (
  id            bigint generated always as identity primary key,
  role          text not null,
  company       text,
  period        text,
  description   text,
  display_order int default 0
);

-- 5. Engineering Stats
create table if not exists stats (
  id     bigint generated always as identity primary key,
  label  text not null,
  value  text not null,
  detail text,
  color  text
);

-- 6. Activity Feed
create table if not exists activity (
  id            bigint generated always as identity primary key,
  type          text not null, -- design | fab | sim | custom
  title         text not null,
  note          text,
  link          text,
  activity_date date default current_date
);

-- 7. Contact links (key/value)
create table if not exists contact (
  id    bigint generated always as identity primary key,
  key   text not null unique,  -- email | phone | linkedin | github | twitter | other
  value text
);

-- Seed default contact keys so upsert works
insert into contact (key, value) values
  ('email',    ''),
  ('phone',    ''),
  ('linkedin', ''),
  ('github',   ''),
  ('twitter',  ''),
  ('other',    '')
on conflict (key) do nothing;
