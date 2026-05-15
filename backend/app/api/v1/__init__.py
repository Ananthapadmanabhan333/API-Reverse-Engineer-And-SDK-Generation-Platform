from fastapi import APIRouter
from . import agents, endpoints, traffic

router = APIRouter()
router.include_router(agents.router, prefix="/agents", tags=["Agents"])
router.include_router(endpoints.router, prefix="/endpoints", tags=["Endpoints"])
router.include_router(traffic.router, prefix="/traffic", tags=["Traffic"])
