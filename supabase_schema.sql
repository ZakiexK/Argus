-- Argus Authentication Platform Database Schema
-- Run this in Supabase SQL Editor

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create progress table
CREATE TABLE IF NOT EXISTS progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  module_type TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  last_accessed TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, module_type)
);

-- Create challenges table
CREATE TABLE IF NOT EXISTS challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_type TEXT NOT NULL,
  level INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  flag TEXT NOT NULL,
  hints JSONB,
  points INTEGER NOT NULL
);

-- Create challenge attempts table
CREATE TABLE IF NOT EXISTS challenge_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE,
  solved BOOLEAN DEFAULT FALSE,
  attempts INTEGER DEFAULT 0,
  solved_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, challenge_id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_user ON challenge_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_challenge ON challenge_attempts(challenge_id);

-- Insert sample Basic Auth challenges
INSERT INTO challenges (module_type, level, title, description, flag, hints, points) VALUES
  ('basic-auth', 1, 'Discovery', 'Find the Basic Auth endpoint and understand how it works', 'FLAG{found_the_endpoint}', '["Try accessing /api/auth/basic", "Look at the response headers"]', 100),
  ('basic-auth', 2, 'Weak Credentials', 'Crack the weak credentials on the vulnerable endpoint', 'FLAG{weak_creds_are_bad}', '["Common passwords like admin/admin", "Try the /api/auth/basic/vulnerable endpoint"]', 200),
  ('basic-auth', 3, 'Base64 Decoding', 'Decode a Basic Auth header to extract credentials', 'FLAG{base64_not_encryption}', '["Basic Auth uses base64 encoding", "Authorization header format: Basic <base64>"]', 300),
  ('basic-auth', 4, 'Brute Force', 'Implement a basic brute force attack', 'FLAG{rate_limiting_matters}', '["Use a small password list", "Automate the requests"]', 400),
  ('basic-auth', 5, 'MITM Simulation', 'Understand why Basic Auth over HTTP is dangerous', 'FLAG{always_use_https}', '["HTTP traffic can be intercepted", "Credentials are sent with every request"]', 500)
ON CONFLICT DO NOTHING;
