import React, { useContext } from "react";
import { ListGroup, Row, Col, Image, Button, Container } from "react-bootstrap";
import { formatCL } from "../../utils/formatCL";
import { CartContext } from "../../context/CartContext.jsx";

const Cart = () => {
  const { items, inc, dec, total } = useContext(CartContext);

  return (
    <Container>
      <h6 className="mb-3">Detalles del pedido:</h6>

      <ListGroup className="mb-3">
        {items.map((it) => (
          <ListGroup.Item key={it.id}>
            <Row className="align-items-center">
              <Col xs={4} className="d-flex align-items-center gap-2">
                <Image src={it.img} alt={it.name} width={40} rounded />
                <span className="text-capitalize">{it.name}</span>
              </Col>

              <Col xs={3}>
                <span>${formatCL(it.price)}</span>
              </Col>

              <Col
                xs={5}
                className="d-flex justify-content-end align-items-center gap-2"
              >
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => dec(it.id)}
                >
                  −
                </Button>
                <span>{it.count}</span>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => inc(it.id)}
                >
                  +
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h5>
        Total: <strong>${formatCL(total)}</strong>
      </h5>
    </Container>
  );
};

export default Cart;
