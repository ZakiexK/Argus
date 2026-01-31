from fastapi import APIRouter, HTTPException, Depends, Header
from sqlalchemy.orm import Session
from app.database import get_db
import base64

router = APIRouter()

@router.get("/")
async def auth_root():
    """Get available authentication endpoints"""
    return {
        "endpoints": [
            "/basic",
            "/basic/secure",
            "/basic/vulnerable"
        ]
    }

@router.post("/basic")
async def basic_auth_demo(authorization: str = Header(None)):
    """
    Basic Authentication endpoint for demonstration
    """
    if not authorization:
        raise HTTPException(
            status_code=401,
            detail="Authorization header required",
            headers={"WWW-Authenticate": "Basic realm='Demo'"}
        )
    
    try:
        # Extract credentials
        scheme, credentials = authorization.split()
        if scheme.lower() != 'basic':
            raise HTTPException(status_code=401, detail="Invalid authentication scheme")
        
        # Decode base64
        decoded = base64.b64decode(credentials).decode('utf-8')
        username, password = decoded.split(':', 1)
        
        # Demo validation (replace with real validation later)
        if username == "demo" and password == "password":
            return {
                "message": "Authentication successful!",
                "user": username,
                "auth_type": "Basic"
            }
        else:
            raise HTTPException(status_code=401, detail="Invalid credentials")
            
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid authorization header")

@router.get("/basic/vulnerable")
async def vulnerable_basic_auth(authorization: str = Header(None)):
    """
    Intentionally vulnerable Basic Auth endpoint for learning
    WARNING: This has security issues on purpose!
    """
    # Vulnerability: Weak credentials
    if authorization:
        try:
            scheme, credentials = authorization.split()
            decoded = base64.b64decode(credentials).decode('utf-8')
            username, password = decoded.split(':', 1)
            
            # Vulnerability: Hardcoded weak credentials
            weak_creds = {
                "admin": "admin",
                "user": "password",
                "test": "test"
            }
            
            if username in weak_creds and weak_creds[username] == password:
                # Vulnerability: Leak information in response
                return {
                    "message": "Access granted",
                    "user": username,
                    "flag": "FLAG{weak_creds_are_bad}",  # CTF flag!
                    "debug_info": f"Logged in as {username} with password {password}"  # Bad practice!
                }
        except:
            pass
    
    raise HTTPException(
        status_code=401,
        detail="Unauthorized",
        headers={"WWW-Authenticate": "Basic realm='Vulnerable'"}
    )
