

from sqlalchemy import Column, String, Boolean, Integer

from .database import Base


class Event(Base):

    __tablename__ = "events"


    appName = Column(String)
    eventId = Column(Integer)
    eventName= Column(String)
    userId = Column(Integer, primary_key=True)
    userName = Column(String)
    eventDescription = Column(String)

    
class User(Base):
    __tablename__ = "users"
    
    userId = Column(Integer, primary_key=True)
    email = Column(String)
    password = Column(String)