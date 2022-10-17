
from pydantic import BaseModel

#clase que se usa para entrada
class Event(BaseModel):
    appName:str
    eventId:int
    information:dict
