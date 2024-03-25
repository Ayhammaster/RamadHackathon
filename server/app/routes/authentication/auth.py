from fastapi import HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from ...models import User, Base
from ...database.connection import engine, get_db
from ...validation.LoginValidation import LoginRequest
from ...validation.SignUpValidation import SignupRequest
import logging

# FastAPI app
router = APIRouter()

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Create a logger instance for this module
logger = logging.getLogger(__name__)


# Route for user signup
@router.post("/signup")
def signup(request: SignupRequest, db: Session = Depends(get_db)):
    try:
        username = request.username.strip()

        # Check for existing username
        existing_user = db.query(User).filter(User.username == username).first()
        if existing_user:
            raise HTTPException(status_code=400, detail="Username already exists")

        password = request.password
        hashed_password = pwd_context.hash(password)

        user = User(username=username, password_hash=hashed_password)
        db.add(user)
        db.commit()

        logger.info(f"User '{username}' signed up successfully")
        return {"message": "User created successfully"}

    except HTTPException as e:
        raise e  # Re-raise specific HTTP exceptions
    except Exception as e:
        logger.error(f"Error occurred during user signup: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.post("/login")
def login(request: LoginRequest, db: Session = Depends(get_db)):
    try:
        username = request.username.strip()
        password = request.password

        user = db.query(User).filter(User.username == username).first()
        if not user or not pwd_context.verify(password, user.password_hash):
            logger.warning(f"Login attempt failed for user '{username}'")
            raise HTTPException(status_code=401, detail="Invalid username or password")

        logger.info(f"User '{username}' logged in successfully")
        return {"message": "Login successful"}

    except HTTPException as e:
        raise e  # Re-raise specific HTTP exceptions
    except Exception as e:
        logger.error(f"Error occurred during user login: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


# Create tables
def create_tables():
    Base.metadata.create_all(bind=engine)


# Create tables on startup
create_tables()
