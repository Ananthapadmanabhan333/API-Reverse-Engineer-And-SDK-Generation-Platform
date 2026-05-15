from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_endpoints():
    return {"endpoints": [
        {"id": "1", "method": "GET", "path": "/api/users", "inferred_domain": "User Management"}
    ]}
