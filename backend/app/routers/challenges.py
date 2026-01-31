from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

@router.get("/")
async def get_challenges(db: Session = Depends(get_db)):
    """Get all available challenges"""
    # TODO: Query database for challenges
    return {
        "challenges": [
            {
                "id": "1",
                "module": "basic-auth",
                "level": 1,
                "title": "Discovery",
                "points": 100,
                "description": "Find the Basic Auth endpoint"
            }
        ]
    }

@router.post("/{challenge_id}/submit")
async def submit_flag(challenge_id: str, flag: str, db: Session = Depends(get_db)):
    """Submit a flag for a challenge"""
    # TODO: Validate flag and update progress
    return {"message": "Flag submitted", "correct": False}
