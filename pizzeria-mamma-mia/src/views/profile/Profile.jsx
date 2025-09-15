import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Profile = ({ email, onLogout }) => {
  return (
    <Card
      className="text-center shadow p-3 my-4"
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <Card.Body>
        <Card.Title>👤 Perfil de Usuario</Card.Title>
        <Card.Text className="mb-4">
          <strong>Email:</strong> {email}
        </Card.Text>
        <Button variant="danger" onClick={onLogout}>
          🔐 Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
