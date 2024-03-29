from pydantic import BaseModel

class ResetPasswordRequest(BaseModel):
    email: str
