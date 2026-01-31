# Argus Authentication Learning Platform

An interactive educational platform teaching authentication mechanisms (Basic Auth, Bearer Tokens, JWT) with integrated CTF challenges.

## 🎯 Project Overview

This platform provides hands-on learning for authentication security, targeting beginners through security professionals. Features include:

- 📚 Interactive learning modules for each auth type
- 🔍 Live request/response visualization
- 🎮 Integrated CTF challenges
- 🛡️ Intentional vulnerabilities in controlled sandbox
- 📊 Progress tracking and achievements

## 🚀 Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion

**Backend:**
- Python FastAPI
- SQLAlchemy
- Supabase (PostgreSQL)

**Deployment:**
- AWS (Amplify + Lambda)

## 📁 Project Structure

```
argus/
├── frontend/          # Next.js application
├── backend/           # FastAPI application
├── docs/              # Documentation
└── SETUP_GUIDE.md    # Complete setup instructions
```

## 🛠️ Getting Started

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for complete setup instructions.

### Quick Start

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 📖 Documentation

- [Setup Guide](./SETUP_GUIDE.md) - Complete setup instructions
- [Collaboration Guide](./docs/COLLABORATION.md) - Team workflow and Git practices
- [Implementation Plan](./docs/IMPLEMENTATION_PLAN.md) - Technical architecture and roadmap

## 🎓 Learning Modules (Roadmap)

- [x] Planning & Architecture
- [ ] **Phase 1**: Basic Authentication (MVP)
- [ ] **Phase 2**: Bearer Tokens
- [ ] **Phase 3**: JWT (JSON Web Tokens)

## 🤝 Contributing

This is a collaborative learning project. See [COLLABORATION.md](./docs/COLLABORATION.md) for workflow guidelines.

## 📝 License

MIT License - Built for educational purposes

## 🙏 Acknowledgments

Created as an interactive cybersecurity education platform.

---

**Status**: 🚧 In Development (MVP Phase - Basic Auth)
