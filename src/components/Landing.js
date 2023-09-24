import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import y from "../assets/yg.jpg";
import axios from "axios";

export default function Landing() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Assuming successful login when status is 200
    // You can add your login logic here
    // For the sake of demonstration, I'm directly redirecting to "/home"
    window.location.href = "/home"; // Redirect to "/home" upon successful login
  };

  return (
    <Container fluid>
      <Row style={{ margin: 0, padding: 0, backgroundColor: "" }}>
        <Col
          style={{
            backgroundColor: "#bcc9cf",
            textAlign: "center",
            paddingTop: "9%",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontFamily: "MozBorderImage",
              fontSize: "65px",
            }}
          >
            Calm Your Brain, <br />
            Ease the Strain..
          </h1>
          <br />
          <Col md="6" style={{ textAlign: "center", marginLeft: "165px" }}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  boxSizing: "border-box",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  boxSizing: "border-box",
                }}
              />
              <button
                onClick={handleLogin}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </div>
            <div>
              <p>
                Don't have an account?{" "}
                <a href="/registration">New Registration</a>
              </p>
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
