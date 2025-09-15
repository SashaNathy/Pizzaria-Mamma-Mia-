import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NotFound = () => {
  return (
    <Container
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-muted mb-4">
        Ups 😅, parece que la pizza que buscas no está en el menú. Verifica la
        dirección o vuelve al inicio.
      </p>
      <Button as={Link} to="/" variant="primary" size="lg">
        🍕 Volver al Home
      </Button>
    </Container>
  );
};

export default NotFound;
