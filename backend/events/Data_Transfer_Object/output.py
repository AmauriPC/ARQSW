
from pydantic import BaseModel

#como desplegariamos los demas datos que tenemos como diccionario en output y como meteriamos eso a la base de datos?
class EventOutput(BaseModel):
    eventId : int
