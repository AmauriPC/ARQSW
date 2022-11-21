"""Repositorie character"""
from contextlib import AbstractContextManager
from typing import Callable, Iterator

from sqlalchemy.orm import Session


from ..models import Event
from ..models import User
from ..Data_Transfer_Object.input import EventDTO
from ..Data_Transfer_Object.output import EventOutput
from ..Data_Transfer_Object.loginInput import loginInput

class EventRepositorie:

    def __init__(self, session_factory: Callable[..., AbstractContextManager[Session]]) -> None:
        self.session_factory = session_factory


    def login(self,login:loginInput):
        exists=False
        with self.session_factory() as session:
            users = session.query(User).all()
            for user in users:
                if user.email == login.email and user.password == login.password:
                    exists=True
        return exists

    def addNewUser (self,loginn:loginInput):
        exists=False
        stringg =''

        with self.session_factory() as session:
            users = session.query(User).all()
            for user in users:
                if user.email == loginn.email:
                    exists=True
            
            if not exists:
                user = User(
                            email= loginn.email,
                            password= loginn.password,
                            )
                session.add(user)
                session.commit()
                session.refresh(user)
                stringg= "usuario dado de alta"
            else:
                stringg= "usuario ya existe en BD"
        
        return stringg

    def add(self, eventt:EventDTO,appNamee) -> Event: 
        with self.session_factory() as session:
            event = Event(
                        appName= appNamee,
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
            return output 
