import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";
import d from "../assets/dee.jpeg";

function NavigationOuter() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#f7f7f7" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={d} height={140} alt="image not found" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#"
                onClick={handleShowModal}
                style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Contact */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Team Name: 404 Not Found</p>
          <p>Contact Us: 620-564-5474</p>
          <p>&copy; 2023 404 Not Found. All Rights Reserved.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* You can add a "Submit" button or other actions here */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavigationOuter;
