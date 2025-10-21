import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { UserContext } from "../../context/UserContext.jsx";

const Profile = () => {
  const { email, getProfile, profile, logout, loading } =
    useContext(UserContext);

  // Trae el perfil desde /api/auth/me si aún no lo hemos pedido
  useEffect(() => {
    if (!profile) {
      getProfile().catch(() => {});
    }
  }, [profile, getProfile]);

  const shownEmail = profile?.email ?? email;

  return (
    <Card
      className="text-center shadow p-3 my-4"
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <Card.Body>
        <Card.Title>👤 Perfil de Usuario</Card.Title>
        <Card.Text className="mb-4">
          <strong>Email:</strong> {shownEmail || "—"}
        </Card.Text>
        <Button variant="danger" onClick={logout} disabled={loading}>
          🔐 Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
