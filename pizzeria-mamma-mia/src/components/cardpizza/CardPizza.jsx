import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatCL } from "../../utils/formatCL";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const CardPizza = ({ name, price, ingredients, desc, img, id }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ id, name, price, ingredients, desc, img });
  };
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="d-flex flex-column align-items-center gap-2">
          <Card.Title>{name}</Card.Title>
          <Card.Text>Descripción: {desc}</Card.Text>
          <Card.Text>
            Precio: <strong> ${formatCL(price)}</strong>
          </Card.Text>
          <Container>
            <strong> Ingredientes:</strong>{" "}
            <ul>
              {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </Container>
          <section className="d-flex justify-content-around gap-4">
            <Button variant="light" onClick={() => navigate(`/pizza/${id}`)}>
              Ver mas👀
            </Button>
            <Button variant="dark" onClick={handleAddToCart}>
              Añadir
            </Button>
          </section>
        </Card.Body>
      </Card>
    </Container>
  );
};
