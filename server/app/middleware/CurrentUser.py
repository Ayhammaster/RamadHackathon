from fastapi import HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlalchemy.orm import Session
from ..models import User
from ..routes.authentication.auth import pwd_context
from ..database.connection import get_db

security = HTTPBasic()
class CurrentUser:
    def get_current_user(credentials: HTTPBasicCredentials = Depends(security), db: Session = Depends(get_db)):
        user = db.query(User).filter(User.username == credentials.username).first()
        if not user or not pwd_context.verify(credentials.password, user.password_hash):
            raise HTTPException(status_code=401, detail="Invalid username or password")
        return user