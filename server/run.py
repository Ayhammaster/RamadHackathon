from app.main import app as application

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(application)