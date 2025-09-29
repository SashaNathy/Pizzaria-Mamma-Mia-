// src/context/CartContext.jsx
import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (pizza) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === pizza.id);
      return existing
        ? prev.map((it) =>
            it.id === pizza.id ? { ...it, count: it.count + 1 } : it
          )
        : [...prev, { ...pizza, count: 1 }];
    });
  };

  const inc = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, count: it.count + 1 } : it))
    );
  };

  const dec = (id) => {
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, count: it.count - 1 } : it))
        .filter((it) => it.count > 0)
    );
  };

  const total = useMemo(
    () => items.reduce((acc, it) => acc + it.price * it.count, 0),
    [items]
  );

  return (
    <CartContext.Provider value={{ items, addToCart, inc, dec, total }}>
      {children}
    </CartContext.Provider>
  );
}
