from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.exc import SQLAlchemyError

app = FastAPI()
# Global error handler
@app.exception_handler(Exception)
async def global_error_handler(request, exc):
    if isinstance(exc, HTTPException):
        return JSONResponse(content={"detail": exc.detail}, status_code=exc.status_code)
    elif isinstance(exc, SQLAlchemyError):
        return JSONResponse(content={"detail": "Database error occurred"}, status_code=500)
    else:
        return JSONResponse(content={"detail": "Internal server error"}, status_code=500)
