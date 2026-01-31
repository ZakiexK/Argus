# 🚀 Argus Authentication Platform - Complete Setup Guide

This guide will walk you through setting up the entire project from scratch. Follow each step in order!

---

## ✅ Phase 1: Git & GitHub Setup (15 minutes)

### Step 1.1: Initialize Git Repository

You already have Git initialized! Let's verify and configure it.

```bash
# Check Git status
git status

# Configure Git (if not done already)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Step 1.2: Create GitHub Repository

**Option A: Via GitHub Website (Easier)**
1. Go to https://github.com/new
2. Repository name: `argus-auth-platform` (or your preferred name)
3. Description: "Interactive authentication security learning platform with CTF challenges"
4. **Keep it Public** (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (we'll add these)
6. Click "Create repository"

**Option B: Via GitHub CLI (if installed)**
```bash
gh repo create argus-auth-platform --public --source=. --remote=origin
```

### Step 1.3: Connect Local to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/argus-auth-platform.git

# Create main branch
git branch -M main

# Create develop branch (our working branch)
git checkout -b develop
```

### Step 1.4: Create Initial Commit

```bash
# Add all files
git add .

# Commit
git commit -m "chore: initial project structure"

# Push to GitHub
git push -u origin develop
git push -u origin main
```

---

## ✅ Phase 2: Project Structure Setup (10 minutes)

### Step 2.1: Create Directory Structure

Run these commands to create the project structure:

```bash
# Navigate to Argus folder
cd E:\Argus

# Create frontend directory (we'll initialize Next.js here)
mkdir frontend

# Create backend directory structure
mkdir backend
mkdir backend\app
mkdir backend\app\routers
mkdir backend\app\models
mkdir backend\app\schemas
mkdir backend\app\services
mkdir backend\app\middleware

# Create docs directory (already exists)
# docs folder already has COLLABORATION.md

# Create .github directory for workflows
mkdir .github
```

### Step 2.2: Create Essential Config Files

I'll create these for you automatically!

---

## ✅ Phase 3: Frontend Setup - Next.js (15 minutes)

### Step 3.1: Initialize Next.js Project

```bash
# Navigate to Argus root
cd E:\Argus

# Create Next.js app in frontend folder
npx create-next-app@latest frontend --typescript --tailwind --app --no-src --import-alias "@/*"
```

**When prompted, answer:**
- ✅ TypeScript? → **Yes**
- ✅ ESLint? → **Yes**
- ✅ Tailwind CSS? → **Yes**
- ✅ `src/` directory? → **No** (we'll use app router directly)
- ✅ App Router? → **Yes**
- ✅ Import alias? → **Yes** (use default @/*)

### Step 3.2: Install shadcn/ui

```bash
# Navigate to frontend
cd frontend

# Initialize shadcn/ui
npx shadcn@latest init
```

**When prompted:**
- Style? → **Default**
- Base color? → **Slate** (or your preference)
- CSS variables? → **Yes**

### Step 3.3: Install Additional Frontend Dependencies

```bash
# Still in frontend directory
npm install axios framer-motion react-hot-toast @tanstack/react-query zustand

# Development dependencies
npm install -D prettier
```

### Step 3.4: Install shadcn/ui Components

```bash
# Install commonly needed components
npx shadcn@latest add button card input label tabs badge progress toast

# Install later as needed: dialog, dropdown-menu, select, etc.
```

---

## ✅ Phase 4: Backend Setup - FastAPI (15 minutes)

### Step 4.1: Check Python Installation

```bash
# Check Python version (need 3.11+)
python --version

# If not installed or version < 3.11, download from python.org
```

### Step 4.2: Create Virtual Environment

```bash
# Navigate to backend directory
cd E:\Argus\backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
.\venv\Scripts\activate

# You should see (venv) in your terminal prompt
```

### Step 4.3: Install FastAPI & Dependencies

```bash
# Make sure venv is activated!
# Install core dependencies
pip install fastapi uvicorn sqlalchemy asyncpg python-dotenv pydantic[email]

# Install additional dependencies
pip install slowapi python-jose[cryptography] passlib[bcrypt] httpx

# Development dependencies
pip install pytest black

# Create requirements.txt
pip freeze > requirements.txt
```

### Step 4.4: Create FastAPI Project Files

I'll create these for you:
- `app/main.py` - Main FastAPI application
- `app/config.py` - Configuration
- `app/database.py` - Database connection
- `.env.example` - Environment variables template

---

## ✅ Phase 5: Supabase Setup (10 minutes)

### Step 5.1: Create Supabase Project

1. Go to https://supabase.com/
2. Sign in (or create account)
3. Click "New Project"
4. Fill in:
   - **Name**: `argus-auth-platform`
   - **Database Password**: (save this somewhere safe!)
   - **Region**: Choose closest to you
   - **Pricing Plan**: Free tier is perfect for MVP
5. Click "Create new project" (takes 2-3 minutes)

### Step 5.2: Get Supabase Credentials

Once project is created:
1. Click "Settings" (gear icon) → "API"
2. Copy these values:
   - **Project URL** (looks like: https://xxxxx.supabase.co)
   - **anon/public key** (starts with eyJ...)
   - **service_role key** (also starts with eyJ... - keep secret!)

### Step 5.3: Create Database Tables

1. In Supabase dashboard, click "SQL Editor"
2. Click "New Query"
3. Copy the SQL schema from `implementation_plan.md` (Database Schema section)
4. Run the query
5. Verify tables created in "Table Editor"

---

## ✅ Phase 6: Environment Configuration (5 minutes)

### Step 6.1: Frontend Environment Variables

```bash
# In E:\Argus\frontend, create .env.local file
```

**Content:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 6.2: Backend Environment Variables

```bash
# In E:\Argus\backend, create .env file
```

**Content:**
```env
DATABASE_URL=postgresql://postgres:your_password@db.xxxxx.supabase.co:5432/postgres
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_service_role_key
ENVIRONMENT=development
```

---

## ✅ Phase 7: GitHub Projects Board (5 minutes)

### Step 7.1: Create Project Board

1. Go to your GitHub repository
2. Click "Projects" tab
3. Click "New Project"
4. Choose "Board" template
5. Name it "Argus Development"
6. Click "Create"

### Step 7.2: Set Up Columns

Rename/create these columns:
- 📋 Backlog
- 📝 To Do
- 🚧 In Progress
- 👀 Review
- ✅ Done

### Step 7.3: Add Initial Tasks

Create issues for:
- [ ] Set up frontend project structure
- [ ] Set up backend project structure
- [ ] Configure Supabase database
- [ ] Create design system & components
- [ ] Build Basic Auth learning module UI
- [ ] Create Basic Auth API endpoints
- [ ] Implement CTF Challenge 1
- [ ] Implement CTF Challenge 2
etc.

---

## ✅ Phase 8: Verify Everything Works (10 minutes)

### Step 8.1: Test Frontend

```bash
# In E:\Argus\frontend
npm run dev

# Should open at http://localhost:3000
# You should see the Next.js welcome page
```

### Step 8.2: Test Backend

```bash
# In E:\Argus\backend, activate venv first
.\venv\Scripts\activate

# Run FastAPI
uvicorn app.main:app --reload

# Should run at http://localhost:8000
# Visit http://localhost:8000/docs to see API docs (Swagger UI)
```

### Step 8.3: Test Database Connection

In backend, create a test endpoint to verify Supabase connection works.

---

## ✅ Phase 9: Team Coordination (5 minutes)

### Step 9.1: Share Repository

1. Add your teammate as collaborator:
   - GitHub repo → Settings → Collaborators
   - Add their GitHub username
2. They'll receive an email invitation

### Step 9.2: Divide Work

**Person A (Frontend):**
- Branch: `feature/frontend-setup`
- Tasks: UI components, design system, pages

**Person B (Backend):**
- Branch: `feature/backend-setup`
- Tasks: API routes, database models, auth logic

### Step 9.3: Set Up Communication

1. Create Discord/Slack workspace
2. Set daily standup time (e.g., 10 AM)
3. Share progress daily!

---

## 📋 Checklist

Before starting development, ensure:

- [ ] Git repository initialized
- [ ] GitHub repository created and connected
- [ ] Next.js frontend running on localhost:3000
- [ ] FastAPI backend running on localhost:8000
- [ ] Supabase project created with tables
- [ ] Environment variables configured
- [ ] GitHub Projects board set up
- [ ] Teammate added as collaborator
- [ ] Communication channel established
- [ ] Daily standup time decided

---

## 🆘 Troubleshooting

**Issue: npm not found**
- Install Node.js from https://nodejs.org/ (LTS version)

**Issue: python not found**
- Install Python 3.11+ from https://python.org/
- Make sure to check "Add to PATH" during installation

**Issue: Permission denied (git)**
- Set up SSH keys or use HTTPS with credentials

**Issue: Port already in use**
- Frontend: Change port in package.json or kill process on 3000
- Backend: Use `uvicorn app.main:app --reload --port 8001`

**Issue: Database connection error**
- Verify DATABASE_URL is correct
- Check Supabase project is running
- Ensure IP is allowed in Supabase settings (usually auto-allowed)

---

## 🎯 Next Steps

Once setup is complete:
1. Review `implementation_plan.md` for feature details
2. Review `docs/COLLABORATION.md` for Git workflow
3. Create your first feature branch
4. Start building! 🚀

**Week 1 Goals:**
- Person A: Basic UI layout + navigation
- Person B: Core API structure + first endpoint
- Together: Verify frontend can call backend

---

**Ready to build something amazing! Let's go! 🔥**
