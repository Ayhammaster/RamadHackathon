from app.main import app as application

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(application, host="127.0.0.1", port=8000)