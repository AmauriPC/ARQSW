
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";


export function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", alignItems:"center"}}>
      <h1>Sign In</h1>
      <div className="login">
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <label>Email address</label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <label>Password</label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div>
            <Button variant="primary" onClick={() => navigate("/dashboard")} type="submit" className="login_btn" >
              Sign In
            </Button>
          </div>
        </Form>
      </div>
    </div>


  );
}
export default Login;