from fastapi import HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app.models import User, Base
from app.database.connection import engine, get_db

# FastAPI app
router = APIRouter()

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Route for user signup
@router.post("/signup")
def signup(username: str, password: str, db: Session = Depends(get_db)):
    hashed_password = pwd_context.hash(password)
    user = User(username=username, password_hash=hashed_password)
    db.add(user)
    db.commit()
    return {"message": "User created successfully"}

# Route for user login
@router.post("/login")
def login(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if not user or not pwd_context.verify(password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid username or password")
    return {"message": "Login successful"}

# Create tables
def create_tables():
    Base.metadata.create_all(bind=engine)

# Create tables on startup
create_tables()