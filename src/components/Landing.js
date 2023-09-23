import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import y from "../assets/yg.jpg";

export default function Landing() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "" }}>
        <Col style={{ backgroundColor: "#bcc9cf",textAlign:'center',paddingTop:'20%'  }}>
          <h1 style={{fontWeight:'bold',fontFamily:'MozBorderImage',fontSize:'65px'}} > Calm Your Brain, <br/>Ease the Strain.. </h1>
          <br />

        </Col>
        <Col>
          <img src={y} alt="not found" height={720} width="100%" />
        </Col>
      </Row>
    </Container>
  );
}
