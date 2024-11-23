-- Drop existing table and policies
drop table if exists contact_submissions cascade;

/**
* Table: contact_submissions
* Description: Stores contact form submissions
*
* Columns:
* - id: Unique identifier for each submission
* - name: Contact's name
* - email: Contact's email address
* - subject: Message subject
* - message: The message content
* - created_at: Timestamp of submission
*
* Security:
* - Public can insert (submit)
* - Only authenticated users can view
*/

-- Create the table
create table contact_submissions (
    id uuid default uuid_generate_v4() primary key,
    product text not null,
    name text not null,
    email text not null,
    subject text not null,
    message text not null,
    created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add table description
comment on table contact_submissions is 'Stores contact form submissions';
comment on column contact_submissions.id is 'Unique identifier for each submission';
comment on column contact_submissions.product is 'Product identifier they''re signing up for';
comment on column contact_submissions.name is 'Contact''s name';
comment on column contact_submissions.email is 'Contact''s email address';
comment on column contact_submissions.subject is 'Message subject';
comment on column contact_submissions.message is 'The message content';
comment on column contact_submissions.created_at is 'Timestamp when the submission occurred';

-- Enable RLS
alter table contact_submissions enable row level security;

-- Create policy to allow anyone to insert (for submissions)
create policy "Allow public submission" on contact_submissions
    for insert
    with check (true);

-- Create policy to allow only authenticated users to view submissions
create policy "Allow authenticated users to view" on contact_submissions
    for select
    using (auth.role() = 'authenticated');