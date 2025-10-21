import { createContext, useMemo, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // Cargar sesión previa si existe
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [email, setEmail] = useState(() => localStorage.getItem("email"));
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API = import.meta?.env?.VITE_API_URL ?? "";

  const saveSession = (jwt, mail) => {
    setToken(jwt);
    setEmail(mail);
    localStorage.setItem("token", jwt);
    localStorage.setItem("email", mail);
  };

  const clearSession = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Error al iniciar sesión");
      // guarda sesión
      saveSession(data.token, data.email);
      return data;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const register = async ({ email, password, ...rest }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, ...rest }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Error al registrarse");
      // guarda sesión
      saveSession(data.token, data.email);
      return data;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearSession();
  };

  const getProfile = async () => {
    if (!token) throw new Error("No autenticado");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data?.message || "No se pudo obtener el perfil");
      setProfile(data);
      // si el backend también devuelve email aquí, podrías sincronizar:
      if (data?.email && data.email !== email) setEmail(data.email);
      return data;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const isAuth = !!token;

  const value = useMemo(
    () => ({
      token,
      email,
      profile,
      isAuth,
      loading,
      error,
      login,
      register,
      logout,
      getProfile,
    }),
    [token, email, profile, isAuth, loading, error]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
