from fastapi import APIRouter

router = APIRouter()

@router.get("/example")
async def read_root():
    return {"message": "Hello, World"}
