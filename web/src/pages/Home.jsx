import { useEffect, useState } from "react";
import { getAlunos } from "../api/alunosApi";
import { Link } from "react-router-dom";
import { Container, Table, Card } from "react-bootstrap";

export default function Home() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    getAlunos().then((res) => setAlunos(res.data));
  }, []);

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card style={{ maxWidth: "900px", width: "100%" }} className="shadow">
        <Card.Body>
          <h2 className="text-center mb-3">Lista de Alunos</h2>
          <p className="text-center text-muted">
            Clique em "Ver detalhes" para ver mais informações.
          </p>

          <Table striped bordered hover responsive>
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
                  <td>
                    <Link to={`/aluno/${a.id}`} className="btn btn-primary btn-sm">
                      Ver detalhes
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

