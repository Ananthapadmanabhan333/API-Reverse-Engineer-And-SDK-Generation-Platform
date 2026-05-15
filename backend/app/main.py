from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import router as api_v1_router

app = FastAPI(
    title="Nexus API Intelligence OS",
    description="Enterprise-grade AI-native API operating system",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_v1_router, prefix="/api/v1")

@app.get("/health")
def health_check():
    return {"status": "ok", "system": "Nexus OS"}
