from pydantic import BaseModel

#clase que se usa para entrada
class EventDTO(BaseModel):
    eventId : int
    eventName :  str
    userId : int
    userName : str
    eventDescription : str
