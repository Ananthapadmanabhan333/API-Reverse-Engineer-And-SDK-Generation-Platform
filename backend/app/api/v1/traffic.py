from fastapi import APIRouter

router = APIRouter()

@router.post("/ingest/har")
def ingest_har():
    return {"status": "accepted", "message": "HAR file queued for processing"}
