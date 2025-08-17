
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { formatCL } from '../../utils/formatCL';

function Navb() {
  const [token, setToken] = useState(false)
  const total = 25000;

  const handleSelected = (key, e) =>{
    e.preventDefault();
     if (key === 'login')  setToken(true);
    if (key === 'logout') setToken(false);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">Pizza Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" onSelect={handleSelected}>
            <Nav.Link href="#home">🍕Home</Nav.Link>
             {token ? (
              <>
                <Nav.Link href="#features">📄Profile</Nav.Link>
                <Nav.Link eventKey="logout" href="#logout" role="button">🔐Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link eventKey="login" href="#login" role="button">🔓Login</Nav.Link>
                <Nav.Link eventKey="register" href="#register">📄Register</Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            <Nav.Link href='#'>🛒Total: $ <strong>{formatCL(total)}</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;