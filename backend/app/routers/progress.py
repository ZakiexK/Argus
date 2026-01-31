from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

@router.get("/{user_id}")
async def get_user_progress(user_id: str, db: Session = Depends(get_db)):
    """Get user's progress across all modules"""
    # TODO: Query database for user progress
    return {
        "user_id": user_id,
        "modules": {
            "basic-auth": {
                "completed": False,
                "challenges_solved": 0,
                "total_challenges": 5,
                "points": 0
            }
        }
    }

@router.post("/{user_id}/update")
async def update_progress(user_id: str, module: str, db: Session = Depends(get_db)):
    """Update user's progress for a module"""
    # TODO: Update database
    return {"message": "Progress updated"}
