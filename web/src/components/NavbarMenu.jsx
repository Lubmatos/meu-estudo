import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">Estudo de Caso - Alunos</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Lista de Alunos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
