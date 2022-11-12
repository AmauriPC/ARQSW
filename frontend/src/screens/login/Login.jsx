import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="login">
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password" />
            <button onClick={() => navigate("/dashboard")} type="submit" className="login_btn" >
              Sign In
            </button>
          </form>
          </div>
      </div>   
    </div> 
  );
}
export default Login;