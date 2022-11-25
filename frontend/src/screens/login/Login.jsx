import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";


export function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState('');
  const [password, setPasword] = useState('');

  function login (){
    return fetch('/api/login', {
      method: "POST",
      body: JSON.stringify({email : email, password: password}),
      headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(result => {
      console.log(result) 
      return result})
    .catch(error => console.log(error))
  }



  return (
    <div style={{ textAlign: "center", alignItems:"center"}}>
      <h1>Sign In</h1>
      <div className="login">
        <Form name= "myForm">
          <Form.Group className="mb-3" controlId="email">
            <label>Email address</label>
            <Form.Control type="email" 
              placeholder="Enter email" 
              onChange={event => setemail(event.target.value)} 
              value={email}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <label>Password</label>
            <Form.Control type="password" 
              placeholder="Password" 
              onChange={event => setPasword(event.target.value)} 
              value={password}/>
          </Form.Group>

          <div>
            <Button variant="primary" type="submit" className="login_btn" onClick = {() => 
              fetch('/api/login', {
                method: "POST",
                body: JSON.stringify({email : email, password: password}),
                headers: {"Content-type": "application/json"}
              })
              .then(response => response.json())
              .then(result => {
                if(result == true){
                  navigate("/dashboard");
                }else{
                  console.log("Password or Email Incorrect")
                }
                return result})
              .catch(error => console.log(error))}>
              Sign In
            </Button>
            <Button  variant="secondary" onClick = {() => 
              fetch('/api/loginPost', {
                method: "POST",
                body: JSON.stringify({email : email, password: password}),
                headers: {"Content-type": "application/json"}
              })
              .then(response => response.json())
              .then(result => console.log(result))
              .catch(error => console.log(error))}
              >
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;