-- Drop existing table and policies
drop table if exists beta_signups cascade;

/**
* Table: beta_signups
* Description: Stores beta signup information for various products
* 
* Columns:
* - id: Unique identifier for each signup
* - email: User's email address
* - product: Product identifier they're signing up for
* - created_at: Timestamp of signup
* 
* Security:
* - Public can insert (signup)
* - Only authenticated users can view
* - Unique constraint prevents duplicate signups per product
*/

-- Create the table
create table beta_signups (
   id uuid default uuid_generate_v4() primary key,
   email text not null,
   product text not null,
   created_at timestamp with time zone default timezone('utc'::text, now()),
   unique(email, product)
);

-- Add table description
comment on table beta_signups is 'Stores beta signup information for various products';
comment on column beta_signups.id is 'Unique identifier for each signup';
comment on column beta_signups.email is 'User''s email address';
comment on column beta_signups.product is 'Product identifier they''re signing up for';
comment on column beta_signups.created_at is 'Timestamp when the signup occurred';

-- Enable RLS
alter table beta_signups enable row level security;

-- Create policy to allow anyone to insert (for signups)
create policy "Allow public signup" on beta_signups
   for insert
   with check (true);

-- Create policy to allow only authenticated users to view signups
create policy "Allow authenticated users to view" on beta_signups
   for select
   using (auth.role() = 'authenticated');