import { createContext, useState, useEffect } from "react";
import { httpFetch } from "../service/httpFetch.js";

export const PizzaContext = createContext();

export function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPizzas = async () => {
    try {
      setLoading(true);
      const data = await httpFetch();
      setPizzas(data);
      setError(null);
    } catch (err) {
      console.error({
        message: "Error al consultar la API",
        status: 500,
        code: "INTERNAL SERVER ERROR",
        error: err,
      });
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        loading,
        error,
        getPizzas,
        getPizzaById,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
}
