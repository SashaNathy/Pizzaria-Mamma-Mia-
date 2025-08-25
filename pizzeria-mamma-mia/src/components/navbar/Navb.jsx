import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { formatCL } from "../../utils/formatCL";

function Navb({ loggedIn }) {
  const [token, setToken] = useState(false);
  const total = 25000;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#" onClick={(e) => e.preventDefault()}>
          Pizza Mamma Mia!
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={(e) => e.preventDefault()}>
              🍕Home
            </Nav.Link>

            {loggedIn ? (
              <>
                <Nav.Link href="#" onClick={(e) => e.preventDefault()}>
                  📄Profile
                </Nav.Link>
                <Nav.Link href="#" onClick={(e) => e.preventDefault()}>
                  🔐Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#" onClick={(e) => e.preventDefault()}>
                  🔓Login
                </Nav.Link>
                <Nav.Link href="#" onClick={(e) => e.preventDefault()}>
                  📄Register
                </Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            <Nav.Link href="#" onClick={(e) => e.preventDefault()}>
              🛒Total: $ <strong>{formatCL(total)}</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
