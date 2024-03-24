from fastapi import FastAPI
from .routes.OCR import ocr
from .routes.authentication import auth

app = FastAPI()

app.include_router(ocr.router)
app.include_router(auth.router)
