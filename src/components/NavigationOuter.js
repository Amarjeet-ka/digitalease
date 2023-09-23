import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import d from "../assets/dee.jpeg"

function NavigationOuter() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#f7f7f7' }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'black', fontSize: '18px' }}>
          <img src={d}  height={120}  alt='image not found' />

          </Navbar.Brand>
          <Nav className="meauto">
            <Nav.Link href="#home" style={{ color: 'black', fontSize: '16px' }}>Home</Nav.Link>
            <Nav.Link href="#features" style={{ color: 'black', fontSize: '16px' }}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'black', fontSize: '16px' }}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationOuter;
