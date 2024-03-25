from fastapi import FastAPI, Depends
from models import User
from middleware import get_current_user

app = FastAPI()

@app.get("/protected/")
def protected_route(user: User = Depends(get_current_user)):
    return {"message": "This is a protected route"}