import React, { useEffect, useState } from "react";
import { Card, ListGroup, Badge, Container } from "react-bootstrap";
import { formatCL } from "../../utils/formatCL.js";
import { Loading } from "../../components/index.js";
import { useParams } from "react-router-dom";
import { getPizzaById } from "../../service/httpFetch.js";

const PizzaDetail = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setLoading(true);
        setErr(null);
        const data = await getPizzaById(id);
        if (!ignore) setPizza(data);
      } catch (e) {
        if (!ignore) setErr(e.message || "Error desconocido");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    if (id) load();
    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) return <Loading />;
  if (err) return <p>Error: {err}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
        <Card.Body>
          <Card.Title className="text-capitalize">
            {pizza.name} <Badge bg="secondary">ID: {pizza.id}</Badge>
          </Card.Title>
          <Card.Text>{pizza.desc}</Card.Text>

          <h5 className="mt-3">Ingredientes</h5>
          <ListGroup className="mb-3">
            {pizza.ingredients?.map((ing, i) => (
              <ListGroup.Item key={i} className="text-capitalize">
                {ing}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4>
            Precio: <strong>${formatCL(pizza.price)}</strong>
          </h4>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PizzaDetail;
