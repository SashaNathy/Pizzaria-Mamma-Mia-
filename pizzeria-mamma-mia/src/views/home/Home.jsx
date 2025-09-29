import React, { useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { CardPizza, Header } from "../../components/index.js";
import "./home.css";
import { PizzaContext } from "../../context/PizzaContext.jsx";

const Home = () => {
  const { pizzas, loading, error } = useContext(PizzaContext);

  if (loading) {
    return (
      <main className="home">
        <Container className="py-5 text-center">
          <p>Cargando pizzas...</p>
        </Container>
      </main>
    );
  }

  if (error) {
    return (
      <main className="home">
        <Container className="py-5 text-center">
          <p>Error al cargar las pizzas: {error}</p>
        </Container>
      </main>
    );
  }

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
                id={pizza.id}
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
