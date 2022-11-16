"""Models module."""

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


'''
class TwitterEvent(Base):

    __tablename__ = "twevents"


    appName = Column(String)
    eventId = Column(Integer)
      eventName= Column(String)
    userId = Column(Integer, primary_key=True)
    userName = Column(String)
    eventDescription = Column(String)


class InstagramEvent(Base):

    __tablename__ = "igevents"

    appName = Column(String)
    eventId = Column(Integer)
    eventName= Column(String)
    userId = Column(Integer, primary_key=True)
    userName = Column(String)
    eventDescription = Column(String)


class BlogEvent(Base):

    __tablename__ = "blogevents"

    appName = Column(String)
    eventId = Column(Integer)
    eventName= Column(String)
    userId = Column(Integer, primary_key=True)
    userName = Column(String)
    eventDescription = Column(String)
'''