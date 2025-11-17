import { useEffect, useState } from "react";
import { getAlunos } from "../api/alunosApi";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

export default function Home() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    getAlunos().then((res) => setAlunos(res.data));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Lista de Alunos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nome}</td>
              <td><Link to={`/aluno/${a.id}`}>Ver detalhes</Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

