import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { CardPizza, Header } from "../../components/index.js";
import "./home.css";

const Home = ({ url }) => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error({
        message: `Error al consultar la API`,
        status: 500,
        code: `INTERNAL SERVER ERROR`,
        error,
      });
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <main className="home">
      <section className="header-wrap">
        <Header />
      </section>
      <Container className="py-5">
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id} xs={12} sm={6} md={4} className="mb-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                desc={pizza.desc}
                img={pizza.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Home;
