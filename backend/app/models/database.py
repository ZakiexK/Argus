from sqlalchemy import Column, String, Integer, Boolean, DateTime, ForeignKey, Text, JSON
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid
from app.database import Base

class User(Base):
    __tablename__ = 'users'
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_id = Column(String, unique=True, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class Progress(Base):
    __tablename__ = 'progress'
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id', ondelete='CASCADE'))
    module_type = Column(String, nullable=False)
    completed = Column(Boolean, default=False)
    last_accessed = Column(DateTime, default=datetime.utcnow)

class Challenge(Base):
    __tablename__ = 'challenges'
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    module_type = Column(String, nullable=False)
    level = Column(Integer, nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    flag = Column(String, nullable=False)
    hints = Column(JSON)
    points = Column(Integer, nullable=False)

class ChallengeAttempt(Base):
    __tablename__ = 'challenge_attempts'
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id', ondelete='CASCADE'))
    challenge_id = Column(UUID(as_uuid=True), ForeignKey('challenges.id', ondelete='CASCADE'))
    solved = Column(Boolean, default=False)
    attempts = Column(Integer, default=0)
    solved_at = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
