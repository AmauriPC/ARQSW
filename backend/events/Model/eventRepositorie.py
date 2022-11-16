"""Repositorie character"""
from contextlib import AbstractContextManager
from typing import Callable, Iterator

from sqlalchemy.orm import Session


from ..models import Event
from ..Data_Transfer_Object.input import EventDTO
from ..Data_Transfer_Object.output import EventOutput


class EventRepositorie:

    def __init__(self, session_factory: Callable[..., AbstractContextManager[Session]]) -> None:
        self.session_factory = session_factory

    def add(self, eventt:EventDTO) -> Event: 
        with self.session_factory() as session:
            event = Event(
                        appName= eventt.appName,
                        eventId= eventt.eventId,
                        eventName= eventt.eventName,
                        userId= eventt.userId,
                        userName= eventt.userName,
                        eventDescription= eventt.eventDescription,
                        )
            session.add(event)
            session.commit()
            session.refresh(event)
            return event
            
    def get_all_events(self) -> Iterator[EventOutput]:
        with self.session_factory() as session:
            output = []
            event_out = session.query(Event).all()

            for event in event_out:
                event_data = EventOutput(
                        appName= event.appName,
                        eventName= event.eventName,
                        userId= event.userId,
                        eventDescription= event.eventDescription,)
                output.append(event_data)
            return output #select * from users
