import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../../context/CartContext.jsx";
import { formatCL } from "../../utils/formatCL";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

export const Navb = () => {
  const cart = useContext(CartContext);
  const total = cart?.total ?? 0;
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
      <Container>
        {/* Se asigna el componente Link de react router al componente navbar de
        bootstrap para que este lo asimile en vez de usar la etiqueta a que trae por defecto, respetando el uso de bootstrap */}
        <Navbar.Brand as={Link} to="/">
          Pizza Mamma Mia!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              🍕Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              📄Profile
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              🔓Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              📄Register
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/cart">
              🛒Total: $ <strong>{formatCL(total)}</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
