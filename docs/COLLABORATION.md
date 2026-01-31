# Team Collaboration Guide - Argus Authentication Platform

## Table of Contents
1. [Git Workflow - Avoiding Conflicts](#git-workflow)
2. [Work Division Strategy](#work-division)
3. [Daily Communication](#daily-communication)
4. [File Organization](#file-organization)
5. [Tools Setup](#tools-setup)
6. [Handling Conflicts](#handling-conflicts)

---

## Git Workflow - Avoiding Conflicts

### Branch Strategy

```
main                           # Production-ready code (don't touch directly!)
  └── develop                  # Integration branch (merge here)
      ├── feature/frontend-setup      (Person A)
      ├── feature/backend-api         (Person B)
      ├── feature/basic-auth-ui       (Person A)
      ├── feature/challenge-system    (Person B)
      └── bugfix/...
```

### Golden Rules to Avoid Conflicts

✅ **DO:**
- Create a NEW feature branch for EACH feature/task
- Pull latest `develop` before creating your branch
- Commit and push frequently (multiple times per day)
- Communicate which files you're working on
- Use meaningful commit messages

❌ **DON'T:**
- Don't work directly on `main` or `develop`
- Don't work on the same file simultaneously
- Don't go days without pushing your code
- Don't merge your own PRs without review

### Step-by-Step Workflow

**Starting a new feature:**
```bash
# 1. Switch to develop and pull latest changes
git checkout develop
git pull origin develop

# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Work on your feature, commit often
git add .
git commit -m "feat: add user authentication UI"

# 4. Push to GitHub
git push origin feature/your-feature-name

# 5. Create Pull Request on GitHub (when ready)
# 6. Request review from teammate
# 7. After approval, merge to develop
```

**Daily sync (IMPORTANT!):**
```bash
# Every morning, update your feature branch with latest develop
git checkout develop
git pull origin develop
git checkout feature/your-feature-name
git merge develop  # This brings latest changes into your branch

# If there are conflicts, resolve them immediately (see section below)
```

### Commit Message Format

Use this format for clear communication:
```
feat: add login component
fix: resolve CORS issue in API
docs: update setup instructions
style: format code with Prettier
refactor: extract validation logic
test: add unit tests for auth
```

---

## Work Division Strategy

### Option 1: Frontend/Backend Split (Recommended)

**👤 Person A - Frontend Focus:**
- Next.js setup and configuration
- All UI components (`src/components/`)
- Page layouts (`src/app/`)
- Frontend features (`src/features/`)
- Styling and design system
- Client-side API integration

**👤 Person B - Backend Focus:**
- FastAPI setup and configuration
- API routes (`app/routers/`)
- Database models and schemas
- Challenge validation logic
- Vulnerable endpoints
- Supabase integration

**🤝 Shared Work:**
- API contracts (decide together)
- Database schema (design together)
- CTF challenge content (write together)
- Testing integration
- Documentation

### Option 2: Feature-Based Split

**Week 1-2 (Setup):**
- Person A: Next.js + shadcn/ui setup
- Person B: FastAPI + Supabase setup

**Week 3-4 (Learning Module):**
- Person A: Theory content UI + Interactive demo frontend
- Person B: Auth endpoints + Request handling backend

**Week 5-6 (CTF Challenges):**
- Person A: Challenges 1, 3, 5 (frontend + backend)
- Person B: Challenges 2, 4 (frontend + backend)

### Clear File Ownership

Create a `CODEOWNERS.md` file to track who owns what:

```markdown
## Frontend
- `/frontend/src/components/ui/` - Person A
- `/frontend/src/features/InteractiveDemo/` - Person A
- `/frontend/src/features/RequestVisualizer/` - Person A

## Backend
- `/backend/app/routers/` - Person B
- `/backend/app/models/` - Person B
- `/backend/app/services/` - Person B

## Shared (Requires Discussion)
- `/frontend/src/lib/api.ts` - Both (API contract)
- `/backend/app/schemas/` - Both (Data contracts)
- Database schema - Both
```

---

## Daily Communication

### Daily Standup (10-15 minutes)

**Every day at a fixed time** (e.g., 10 AM), share:

**Format (use Slack/Discord/Voice):**
```
👤 Person A:
✅ Yesterday: Completed login UI component
🚧 Today: Working on interactive demo panel
❓ Blockers: Need API endpoint for /auth/basic

👤 Person B:
✅ Yesterday: Set up FastAPI project structure
🚧 Today: Creating auth endpoints
❓ Blockers: None
```

### Communication Channels

**Slack/Discord Setup:**
- `#general` - General discussion
- `#frontend` - Frontend questions/updates
- `#backend` - Backend questions/updates
- `#git-commits` - Auto-post commits (GitHub integration)
- `#daily-standup` - Daily check-ins

### Before You Start Working

**Quick message to teammate:**
```
"Hey! Starting work on:
- frontend/src/features/CTFChallenge/ChallengeCard.tsx
- frontend/src/features/CTFChallenge/HintSystem.tsx

Let me know if you're touching these!"
```

This simple communication prevents 90% of conflicts!

---

## File Organization to Avoid Conflicts

### Frontend Separation

```
frontend/src/
├── app/                    # Person A (pages & routing)
├── components/
│   ├── ui/                # Person A (shared UI components)
│   ├── modules/           # Person A (learning modules)
│   └── layout/            # Person A (layout components)
├── features/
│   ├── InteractiveDemo/   # Person A
│   ├── RequestVisualizer/ # Person A
│   ├── CTFChallenge/      # Split or assign
│   └── ProgressTracker/   # Split or assign
├── lib/
│   ├── api.ts            # 🔄 SHARED - discuss changes!
│   ├── utils.ts          # Person A
│   └── supabase.ts       # Person B
└── hooks/                # Person A
```

### Backend Separation

```
backend/app/
├── main.py               # Person B (initial setup, then rarely touched)
├── routers/
│   ├── auth.py          # Person B
│   ├── vulnerable.py    # Person B
│   ├── challenges.py    # Person B or split
│   └── progress.py      # Person B or split
├── models/
│   └── database.py      # Person B
├── schemas/             # 🔄 SHARED - discuss changes!
└── services/            # Person B
```

### The "Shared Files" Rule

Files that both touch (like `api.ts` or schemas):
1. **Communicate before editing**: "Planning to add new endpoint to api.ts"
2. **Pull latest before editing**: Always sync first
3. **Small, frequent commits**: Don't hoard changes
4. **Quick review**: Fast PR turnaround

---

## Tools Setup

### 1. GitHub Projects Board

Create columns:
- **Backlog** - All planned features
- **To Do** - This week's tasks
- **In Progress** - Currently working on
- **Review** - Waiting for code review
- **Testing** - Being tested
- **Done** - Completed

**Assign tasks:**
- Drag task card to "In Progress"
- Assign yourself to the card
- Move to "Review" when PR is created
- Teammate reviews and tests
- Move to "Done" when merged

### 2. GitHub Pull Request Template

Create `.github/pull_request_template.md`:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Refactoring

## Testing
- [ ] Tested locally
- [ ] No console errors
- [ ] Works on both Chrome & Firefox (for frontend)

## Screenshots (if UI changes)
[Add screenshots here]

## Notes for Reviewer
Any specific areas to focus on during review
```

### 3. Code Editor Setup (VSCode)

**Both install these extensions:**
- ESLint (for TypeScript/JavaScript)
- Prettier (code formatting)
- Python (for backend)
- GitLens (see who changed what)

**Shared prettier config** (`frontend/.prettierrc`):
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100
}
```

This ensures consistent code style!

---

## Handling Conflicts

### When Git Conflicts Happen

**Don't panic!** Follow these steps:

```bash
# 1. You'll see this when merging:
# CONFLICT (content): Merge conflict in src/lib/api.ts

# 2. Open the file, you'll see:
<<<<<<< HEAD
// Your changes
export const API_URL = 'http://localhost:8000';
=======
// Their changes
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
>>>>>>> develop

# 3. Decide what to keep:
// Keep both, their version is better
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

# 4. Remove conflict markers, save file

# 5. Mark as resolved:
git add src/lib/api.ts
git commit -m "merge: resolve API_URL conflict"
git push
```

### Preventing Conflicts

**Best practices:**
1. **Pull often**: At least daily
2. **Push often**: Multiple times per day
3. **Small PRs**: 100-300 lines max
4. **Fast reviews**: Review PRs same day
5. **Communicate**: "I'm working on XYZ file today"

---

## Example Daily Workflow

### Morning Routine (Both)

```bash
# 1. Check Slack/Discord for updates
# 2. Daily standup (10 AM)
# 3. Pull latest changes
git checkout develop
git pull origin develop

# 4. Update your feature branch
git checkout feature/your-branch
git merge develop

# 5. Start coding!
```

### Throughout the Day

```bash
# Commit every 1-2 hours
git add .
git commit -m "feat: add challenge validation"
git push

# Creates a backup and shows progress to teammate!
```

### End of Day

```bash
# 1. Commit and push everything
git add .
git commit -m "wip: progress on auth UI (not done)"
git push

# 2. Update team
"Pushed progress on auth UI. Tomorrow: finishing form validation."

# 3. Review teammate's PR if they created one
```

---

## Code Review Checklist

### When Reviewing Teammate's PR

**Check:**
- ✅ Code runs without errors
- ✅ Follows project structure
- ✅ No hardcoded values (use env variables)
- ✅ Commented complex logic
- ✅ No console.log() or print() left in production code
- ✅ Consistent code style
- ✅ Tests pass (if applicable)

**Give constructive feedback:**
- 👍 "Great job on the error handling!"
- 💡 "Consider extracting this into a helper function?"
- ❓ "Can you explain why we need this timeout?"

**Not:**
- ❌ "This is wrong"
- ❌ "I would have done it differently"

---

## Weekly Sync (Recommended)

**Friday afternoon (30 min):**
- Demo what you built this week
- Discuss next week's priorities
- Adjust task assignments if needed
- Celebrate wins! 🎉

---

## Quick Reference Commands

```bash
# Create new feature branch
git checkout -b feature/name

# Daily sync
git checkout develop
git pull
git checkout feature/name
git merge develop

# Save progress
git add .
git commit -m "message"
git push

# Check what you changed
git status
git diff

# See commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

---

## Emergency: "I Messed Up Git!"

### Committed to wrong branch
```bash
# Undo commit but keep changes
git reset --soft HEAD~1

# Switch to correct branch
git checkout correct-branch

# Commit again
git add .
git commit -m "message"
```

### Need to discard all local changes
```bash
# WARNING: This deletes your local changes!
git reset --hard origin/develop
```

### Accidentally deleted important code
```bash
# Find the commit where it existed
git log --all

# Restore that commit
git checkout <commit-hash> -- path/to/file
```

---

## Summary: Keys to Successful Collaboration

1. ✅ **Communicate daily** - Know what your teammate is working on
2. ✅ **Pull/push often** - Sync at least daily
3. ✅ **Own your files** - Divide work clearly
4. ✅ **Review quickly** - Don't block your teammate
5. ✅ **Small PRs** - Easier to review, less conflicts
6. ✅ **Use the board** - Track progress visually
7. ✅ **Ask questions** - No stupid questions!
8. ✅ **Celebrate progress** - You're building something awesome!

---

**Remember:** Conflicts are normal! The key is communication and quick resolution. When in doubt, talk to your teammate! 🚀
