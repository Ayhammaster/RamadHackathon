from pydantic import BaseModel, Field, validator
import re

class LoginRequest(BaseModel):
    username: str = Field(..., min_length=4, max_length=20)
    password: str = Field(..., min_length=8)