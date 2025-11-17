import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlunoDetalhes from "./pages/AlunoDetalhes";
import NavbarMenu from "./components/NavbarMenu";

export default function App() {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aluno/:id" element={<AlunoDetalhes />} />
      </Routes>
    </>
  );
}
