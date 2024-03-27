import logging
import os
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.exc import SQLAlchemyError
from starlette.middleware.cors import CORSMiddleware

from .routes.OCR import ocr
from .routes.authentication import auth

# Configure logging
logging.basicConfig(level=logging.DEBUG)  # Set logging level to DEBUG

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.exception_handler(Exception)
async def global_error_handler(request, exc):
    if isinstance(exc, HTTPException):
        return JSONResponse(content={"detail": exc.detail}, status_code=exc.status_code)
    elif isinstance(exc, SQLAlchemyError):
        return JSONResponse(content={"detail": "Database error occurred"}, status_code=500)
    else:
        return JSONResponse(content={"detail": "Internal server error"}, status_code=500)

app.include_router(auth.router)
app.include_router(ocr.router)

# Add logging statements
logging.debug("Starting application...")
logging.debug("Current working directory: %s", os.getcwd())
