-- Argus Platform Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- PROFILES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster username lookups
CREATE INDEX IF NOT EXISTS idx_profiles_username ON profiles(username);

-- Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Users can read all profiles
CREATE POLICY "Profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

-- Users can update only their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- ============================================
-- LESSON PROGRESS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS lesson_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_slug TEXT NOT NULL,
  lesson_slug TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, module_slug, lesson_slug)
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_lesson_progress_user_id ON lesson_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_module ON lesson_progress(module_slug);

-- RLS
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;

-- Users can only see their own progress
CREATE POLICY "Users can view own progress"
  ON lesson_progress FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert/update their own progress
CREATE POLICY "Users can manage own progress"
  ON lesson_progress FOR ALL
  USING (auth.uid() = user_id);

-- ============================================
-- CTF SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS ctf_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_slug TEXT NOT NULL,
  lesson_slug TEXT NOT NULL,
  challenge_id TEXT NOT NULL,
  answer TEXT NOT NULL,
  correct BOOLEAN NOT NULL,
  points_earned INTEGER DEFAULT 0,
  submitted_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, module_slug, lesson_slug, challenge_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_ctf_submissions_user_id ON ctf_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_ctf_submissions_challenge ON ctf_submissions(challenge_id);

-- RLS
ALTER TABLE ctf_submissions ENABLE ROW LEVEL SECURITY;

-- Users can only see their own submissions
CREATE POLICY "Users can view own submissions"
  ON ctf_submissions FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own submissions
CREATE POLICY "Users can submit own answers"
  ON ctf_submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- USER ACHIEVEMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL,
  module_slug TEXT,
  earned_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id ON user_achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_user_achievements_achievement_id ON user_achievements(achievement_id);

-- RLS
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- Users can only see their own achievements
CREATE POLICY "Users can view own achievements"
  ON user_achievements FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own achievements (via function)
CREATE POLICY "Users can earn achievements"
  ON user_achievements FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- USER STATS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS user_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  total_points INTEGER DEFAULT 0,
  modules_completed INTEGER DEFAULT 0,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- RLS
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

-- Users can only see their own stats
CREATE POLICY "Users can view own stats"
  ON user_stats FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update their own stats
CREATE POLICY "Users can update own stats"
  ON user_stats FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for profiles table
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Trigger for user_stats table
CREATE TRIGGER update_user_stats_updated_at BEFORE UPDATE ON user_stats
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INITIAL DATA / SEED (Optional)
-- ============================================

-- You can add sample achievements here if needed
-- INSERT INTO achievements (id, name, description, icon) VALUES
--   ('basic_beginner', 'Basic Beginner', 'Complete your first Basic Auth lesson', '🎓'),
--   ('encoder', 'Encoder', 'Master Base64 encoding', '🔤');

COMMENT ON TABLE profiles IS 'User profiles with username and display information';
COMMENT ON TABLE lesson_progress IS 'Tracks which lessons users have completed';
COMMENT ON TABLE ctf_submissions IS 'Records all CTF challenge attempts and results';
COMMENT ON TABLE user_achievements IS 'Stores earned achievements for each user';
COMMENT ON TABLE user_stats IS 'Aggregated statistics for user dashboard';
