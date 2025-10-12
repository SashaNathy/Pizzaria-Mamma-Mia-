import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // Token simulado: parte en true
  const [token, setToken] = useState(true);

  // Cerrar sesión: token pasa a false
  const logout = () => {
    alert(`La sesiòn està cerrada`);
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
}
