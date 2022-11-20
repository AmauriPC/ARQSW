from pydantic import BaseModel

#clase que se usa para entrada
class loginInput(BaseModel):
    email : str
    password: str