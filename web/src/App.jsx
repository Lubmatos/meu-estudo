
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import AlunoDetalhes from "./pages/AlunoDetalhes";

export default function App() {
  return (
    <>
      <NavbarMenu />

      <Container className="pb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos/:id" element={<AlunoDetalhes />} />
        </Routes>
      </Container>
    </>
  );
}
