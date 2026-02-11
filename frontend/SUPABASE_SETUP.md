# Supabase Setup Guide for Argus

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new account or sign in
3. Click "New Project"
4. Fill in:
   - Project name: `argus` (or your choice)
   - Database password: (generate a strong one, save it securely)
   - Region: Choose closest to your users
5. Wait for project to be created (~2 minutes)

## Step 2: Get API Keys

1. In your Supabase project, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (starts with `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in your frontend directory:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and paste your values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

## Step 4: Create Database Tables

1. In Supabase Dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy the contents of `supabase/schema.sql`
4. Paste into the SQL editor
5. Click "Run" to execute
6. Check for success message (green checkmark)

## Step 5: Verify Tables Created

1. Go to **Table Editor** in Supabase
2. You should see these tables:
   - `profiles`
   - `lesson_progress`
   - `ctf_submissions`
   - `user_achievements`
   - `user_stats`

## Step 6: Configure Email Templates (Optional)

1. Go to **Authentication** → **Email Templates**
2. Customize templates for:
   - Confirm signup
   - Reset password
   - Magic link
   - Change email

## Step 7: Test Authentication

1. Start your Next.js dev server:
   ```bash
   npm run dev
   ```

2. Navigate to:
   - `http://localhost:3000/auth/register` - Test registration
   - `http://localhost:3000/auth/login` - Test login

3. Create a test account and verify it works

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Check that `.env.local` exists and has correct values
- Restart your dev server after creating `.env.local`

### Error: "relation 'profiles' does not exist"
- Run the `schema.sql` file in Supabase SQL Editor
- Verify tables were created in Table Editor

### Error: "Invalid API key"
- Double-check you copied the **anon public** key, not the secret key
- Make sure there are no extra spaces in the `.env.local` file

### Users can't sign up
- Check Supabase logs: **Authentication** → **Logs**
- Verify email confirmation is disabled (or configure email service)
- In **Authentication** → **Settings** → **User Signups**, ensure "Enable email confirmations" is OFF for testing

## Next Steps

Once setup is complete:
1. Test user registration
2. Test user login
3. Verify profile is created in `profiles` table
4. Test protected features (CTF challenges)
5. Check that progress saves to database

## Production Deployment

Before deploying to production:
1. Update `NEXT_PUBLIC_APP_URL` to your production domain
2. Enable email confirmations
3. Configure custom SMTP server (optional)
4. Set up password requirements in Supabase Auth settings
5. Enable Row Level Security (already done in schema.sql)
6. Consider rate limiting for auth endpoints
