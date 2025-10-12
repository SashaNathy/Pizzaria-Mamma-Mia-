const API_URL = "http://localhost:5000/api/pizzas";

export async function httpFetch() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener pizzas");
  return res.json();
}

export async function getPizzaById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error(`Error al obtener pizza ${id}`);
  return res.json();
}
