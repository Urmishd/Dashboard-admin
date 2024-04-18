import React, { useState } from "react";
import Logo from "../img/logo2.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import Admindashboard from "../page/Admindashboard";
import App from "../App";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://adsdeskapi.adscodegensolutions.com/api/v1/Token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      setLoggedIn(true);
     
     alert("Sccess")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {loggedIn ? (
        <App />
      ) : (
        <section className="bg-login">
          <Container>
            <Row className="justify-content-center">
              <Col md={6}>
                <img src={Logo} alt="" className="logo" />
                <div className="bg-light mt-5 p-5">
                  <h2 className="text-center mb-4">Login</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        className=""
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <div className="text-center mt-3">
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="text-center mt-3">
                    <a href="#">Forgot password?</a>
                    <span> | </span>
                    <a href="#">Register</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
}

export default Login;
