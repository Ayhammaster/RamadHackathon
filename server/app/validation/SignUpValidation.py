from pydantic import BaseModel, Field, validator, EmailStr
import re

class SignupRequest(BaseModel):
    username: str = Field(..., min_length=4, max_length=20)
    email: EmailStr = Field(..., description="Valid email address")
    password: str = Field(..., min_length=8)

    @validator('username')
    def validate_username(cls, v):
        if not re.match("^[a-zA-Z0-9_-]+$", v):
            raise ValueError("Username can only contain alphanumeric characters, underscores, and hyphens")
        return v
    
    @validator('password')
    def validate_password(cls, v):
        if not re.match("^[a-zA-Z0-9]+$", v):
            raise ValueError("Password can only contain alphanumeric characters")
        return v
