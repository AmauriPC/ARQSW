"""endpoints para character"""


from fastapi import APIRouter, Depends, Response, status
from dependency_injector.wiring import inject, Provide

from ..containers import Container


router = APIRouter()

@router.get("/twitter",status_code=status.HTTP_201_CREATED)
@inject
def new_twitter_event():
    return "añadir evento nuevo twitter"

@router.post("/blog")
@inject
def new_blog_event():
    return "añadir evento nuevo blog"


@router.post("/instagram")
@inject
def new_instagram_event():
    return "añadir evento nuevo instagram"

@router.get("/events")
@inject
def get_all_events():
    return "get events"
