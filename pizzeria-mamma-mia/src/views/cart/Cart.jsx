import React, { useContext, useMemo, useState } from "react";
import {
  ListGroup,
  Row,
  Col,
  Image,
  Button,
  Container,
  Alert,
} from "react-bootstrap";
import { formatCL } from "../../utils/formatCL";
import { CartContext } from "../../context/CartContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";

const Cart = () => {
  const { items, inc, dec, total /*, clear */ } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Solo mandamos al backend lo necesario
  const payload = useMemo(
    () => ({
      items: items.map(({ id, name, price, count }) => ({
        id,
        name,
        price,
        count,
      })),
      total,
    }),
    [items, total]
  );

  const handlePay = async () => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    try {
      const res = await fetch("/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok)
        throw new Error(data?.message || "No se pudo procesar el pago");

      setSuccessMsg(
        `✅ ¡Compra realizada con éxito! ${data?.id ? `#${data.id}` : ""}`
      );
      // Si tu CartContext tiene método clear(), descomenta:
      // clear();
    } catch (e) {
      setErrorMsg(e.message || "Error desconocido al pagar");
    } finally {
      setLoading(false);
    }
  };

  const isEmpty = items.length === 0;

  return (
    <Container>
      <h6 className="mb-3">Detalles del pedido:</h6>

      {!!successMsg && <Alert variant="success">{successMsg}</Alert>}
      {!!errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      {!token && (
        <Alert variant="warning">
          Debes iniciar sesión para completar tu compra.
        </Alert>
      )}

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

      {token && (
        <Button
          onClick={handlePay}
          disabled={loading || isEmpty}
          className="mt-2"
        >
          {loading ? "Procesando..." : "Pagar"}
        </Button>
      )}
    </Container>
  );
};

export default Cart;
