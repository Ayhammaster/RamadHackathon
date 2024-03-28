from fastapi import Header, HTTPException
from typing import Optional
from ..database.connection import SessionLocal
from ..models import User

async def validate_token(token: Optional[str] = Header(None)):
    if not token:
        raise HTTPException(status_code=401, detail="Token is missing")

    db = SessionLocal()
    try:
        user_with_token = db.query(User).filter(User.token == token).first()
        if not user_with_token:
            raise HTTPException(status_code=401, detail="Invalid token")
        return True
    finally:
        db.close()
