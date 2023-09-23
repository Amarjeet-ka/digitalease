import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function NewRegistration() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make an HTTP POST request to your backend API to submit the registration data
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setRegistrationStatus("Registration successful!");
      } else {
        // Handle registration failure
        setRegistrationStatus("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <Container fluid>
      <Row style={{ margin: 0, padding: 0, backgroundColor: "" }}>
        <Col
          style={{
            backgroundColor: "#bcc9cf",
            textAlign: "center",
            padding: "5% 5%",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontFamily: "MozBorderImage",
              fontSize: "65px",
            }}
          >
            Register
          </h1>
          <br />
          <Col
            md="6"
            style={{
              textAlign: "center",
              marginLeft: "165px",
              paddingBottom: "20%",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
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
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
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
                  type="submit"
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
                  Register
                </button>
                {registrationStatus && (
                  <p style={{ color: "green" }}>{registrationStatus}</p>
                )}

                <br />
                <p>
                  Already a User? <a href="/"> Sign-in</a>
                </p>
              </div>
            </form>
          </Col>
        </Col>
        <Col>{/* Add an image or other content */}</Col>
      </Row>
    </Container>
  );
}
