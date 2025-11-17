import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Estudo de Caso</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Alunos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
