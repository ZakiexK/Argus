from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, challenges, progress
from app.config import settings

app = FastAPI(
    title="Argus Authentication Platform API",
    description="Backend API for the Argus authentication learning platform",
    version="1.0.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(challenges.router, prefix="/api/challenges", tags=["Challenges"])
app.include_router(progress.router, prefix="/api/progress", tags=["Progress"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to Argus Authentication Platform API",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
