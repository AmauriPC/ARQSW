"""Application module."""

from fastapi import FastAPI

from .containers import Container

from .View import endpointsEvent

def create_app() -> FastAPI:
    container = Container()
    
    app = FastAPI()
    app.container = container


    app.include_router(endpointsEvent.router)
    return app
app = create_app()
