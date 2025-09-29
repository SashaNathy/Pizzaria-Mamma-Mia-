const API_URL = "http://localhost:5000/api/pizzas";

export async function httpFetch() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener pizzas");
  return res.json();
}
