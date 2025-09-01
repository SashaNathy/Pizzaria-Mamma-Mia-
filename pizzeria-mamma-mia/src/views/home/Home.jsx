// import React, { useState } from 'react'
import Container from "react-bootstrap/esm/Container";
import CardPizza from "../../components/cardpizza/CardPizza.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Header } from "../../components/header/Header.jsx";
import { pizzas } from "../../utils/pizzas.js";
import "./home.css";

const Home = () => {
  // console.log(pizzas);
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
