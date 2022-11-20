"""endpoints para character"""


from fastapi import APIRouter, Depends, Response, status
from dependency_injector.wiring import inject, Provide

from ..containers import Container
from ..Model.eventRepositorie import EventRepositorie   
from ..Data_Transfer_Object.input import EventDTO
from ..Data_Transfer_Object.loginInput import loginInput

router = APIRouter()


@router.get("/login")
@inject
def get_user_login(
    login : loginInput,
    eventRepositorie : EventRepositorie = Depends(Provide[Container.eventRepositorie])
):
    return eventRepositorie.login(login)


@router.post("/loginPost")
@inject
def post_new_user(
    login : loginInput,
    eventRepositorie : EventRepositorie = Depends(Provide[Container.eventRepositorie])
):
    return eventRepositorie.addNewUser(login)

@router.post("/twitter")
@inject
def new_twitter_event(
    event_input : EventDTO,
    eventRepositorie : EventRepositorie = Depends(Provide[Container.eventRepositorie])

):
    return eventRepositorie.add(event_input)

@router.post("/blog")
@inject
def new_blog_event(
    event_input : EventDTO,
    eventRepositorie : EventRepositorie = Depends(Provide[Container.eventRepositorie])
):
    return eventRepositorie.add(event_input,"blog")


@router.post("/instagram")
@inject
def new_instagram_event(    
    event_input : EventDTO,
    eventRepositorie : EventRepositorie = Depends(Provide[Container.eventRepositorie])
):
    return eventRepositorie.add(event_input,"instagram")


@router.get("/events")
@inject
def get_all_events(
    eventRepositorie : EventRepositorie = Depends(Provide[Container.eventRepositorie])
):
    return eventRepositorie.get_all_events()
