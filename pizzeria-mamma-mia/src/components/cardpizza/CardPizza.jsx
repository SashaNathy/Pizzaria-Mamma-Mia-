import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatCL } from "../../utils/formatCL";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardPizza({ name, price, ingredients = [], img }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column align-items-center gap-2">
        <Card.Title>{name}</Card.Title>
        <Card.Text>Precio: ${formatCL(price)}</Card.Text>
        <Container>
          <strong> Ingredientes:</strong>{" "}
          {Array.isArray(ingredients) ? ingredients.join(", ") : ingredients}
        </Container>
        <section className="d-flex justify-content-around gap-4">
          <Button variant="light">Ver mas👀</Button>
          <Button variant="dark">Añadir</Button>
        </section>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
