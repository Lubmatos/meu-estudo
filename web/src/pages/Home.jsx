import { useEffect, useState } from "react";
import { getAlunos } from "../api/alunosApi";
import { Link } from "react-router-dom";
import { Container, Table, Card, Form, Button, Row, Col } from "react-bootstrap";

export default function Home() {
  const [alunos, setAlunos] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    getAlunos().then((res) => setAlunos(res.data));
  }, []);

  const alunosFiltrados = alunos.filter((a) =>
    a.nome.toLowerCase().includes(busca.toLowerCase()) ||
    a.id.toString().includes(busca)
  );

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card style={{ maxWidth: "900px", width: "100%" }}>
        <Card.Body>
          <h2 className="text-center mb-3">Lista de Alunos</h2>
          <p className="text-center text-muted">
            Consulte os alunos cadastrados e clique em "Ver detalhes".
          </p>

          {/* LINHA DE BUSCA CORRIGIDA */}

          <Row className="align-items-center mb-3">
            <Col md={10}>
              <Form.Control
                type="text"
                placeholder="Buscar por nome ou ID..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </Col>

            <Col md={2} className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="w-100"
                onClick={() => setBusca("")}
              >
                Limpar
              </Button>
            </Col>
          </Row>

          {/* TABELA */}
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>IA da UE</th>
                <th>Nome</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {alunosFiltrados.map((a) => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.nome}</td>
                  <td>
                    <Link to={`/aluno/${a.id}`} className="btn btn-primary btn-sm">
                      Ver também
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
