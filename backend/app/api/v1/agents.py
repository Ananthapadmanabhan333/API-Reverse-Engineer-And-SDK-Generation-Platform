from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel
from app.agents.orchestrator import run_discovery_agent

router = APIRouter()

class DiscoveryRequest(BaseModel):
    base_url: str
    target_name: str

@router.post("/discovery/start")
def start_discovery(request: DiscoveryRequest, bg_tasks: BackgroundTasks):
    bg_tasks.add_task(run_discovery_agent, request.base_url)
    return {"status": "started", "target": request.target_name}
