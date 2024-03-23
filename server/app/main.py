from fastapi import FastAPI
from .routes import example, ocr

app = FastAPI()

app.include_router(example.router)
app.include_router(ocr.router)
