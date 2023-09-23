import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import y from "../assets/yg.jpg";

export default function Landing() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Create a data object to send to the backend
    const data = {
      username,
      password,
    };

    // Make an HTTP POST request to your backend API
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle a successful login here (e.g., redirect the user)
        console.log("Login successful!");
      } else {
        // Handle login failure (e.g., show an error message)
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <Container fluid>
      <Row style={{ margin: 0, padding: 0, backgroundColor: "" }}>
        <Col style={{ backgroundColor: "#bcc9cf", textAlign: 'center', paddingTop: '9%' }}>
          <h1 style={{ fontWeight: 'bold', fontFamily: 'MozBorderImage', fontSize: '65px' }}>Calm Your Brain, <br />Ease the Strain..</h1>
          <br />
          {/* User Login Input Field */}
          <Col md="6" style={{ textAlign: 'center', marginLeft: '165px' }}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  boxSizing: 'border-box',
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  boxSizing: 'border-box',
                }}
              />
              <button
                onClick={handleLogin}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  fontSize: '16px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Login
              </button>
            </div>
            <div>
              <p>Don't have an account? <a href="/registration">New Registration</a></p>
            </div>
          </Col>
        </Col>
        <Col>
          <img src={y} alt="not found" height={720} width="100%" />
        </Col>
      </Row>
    </Container>
  );
}
