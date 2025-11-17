
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Spinner,
  Alert,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { getAlunos } from "../api/alunosApi";

export default function Home() {
  const [alunos, setAlunos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarAlunos() {
      try {
        setLoading(true);
        setErro(null);

        const res = await getAlunos();
        setAlunos(res.data);
        setFiltrados(res.data);
      } catch (e) {
        console.error(e);
        setErro("Não foi possível carregar a lista de alunos.");
      } finally {
        setLoading(false);
      }
    }

    carregarAlunos();
  }, []);

  
  useEffect(() => {
    const termo = busca.toLowerCase();
    const resultado = alunos.filter(
      (a) =>
        String(a.id).includes(termo) ||
        a.nome.toLowerCase().includes(termo)
    );
    setFiltrados(resultado);
  }, [busca, alunos]);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Lista de Alunos</Card.Title>
              <Card.Text className="text-muted mb-4">
                Consulte os alunos cadastrados na API do professor e clique em
                &quot;Ver detalhes&quot; para mais informações.
              </Card.Text>

              {/* Campo de busca */}
              <Form className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Buscar por nome ou ID..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setBusca("")}
                  >
                    Limpar
                  </Button>
                </InputGroup>
              </Form>

              {/* Erro */}
              {erro && (
                <Alert variant="danger" className="mb-3">
                  {erro}
                </Alert>
              )}

              {/* Loading */}
              {loading ? (
                <div className="d-flex justify-content-center py-4">
                  <Spinner animation="border" role="status" />
                </div>
              ) : (
                <div className="table-responsive">
                  <Table striped bordered hover size="sm">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th className="text-center">Detalhes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtrados.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="text-center py-4">
                            Nenhum aluno encontrado.
                          </td>
                        </tr>
                      ) : (
                        filtrados.map((a) => (
                          <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>{a.nome}</td>
                            <td className="text-center">
                              <Button
                                as={Link}
                                to={`/aluno/${a.id}`}
                                size="sm"
                                variant="primary"
                              >
                                Ver detalhes
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
