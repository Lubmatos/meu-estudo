// src/pages/AlunoDetalhes.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { getAlunoById } from "../api/alunosApi";

export default function AlunoDetalhes() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarAluno() {
      try {
        setLoading(true);
        setErro(null);

        const res = await getAlunoById(id); // mantém seu padrão
        setAluno(res.data);
      } catch (e) {
        console.error(e);
        setErro("Não foi possível carregar os detalhes do aluno.");
      } finally {
        setLoading(false);
      }
    }

    carregarAluno();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <Container className="mt-4 d-flex justify-content-center">
        <Spinner animation="border" role="status" />
      </Container>
    );
  }

  // Erro
  if (erro) {
    return (
      <Container className="mt-4">
        <Alert variant="danger" className="mb-3">
          {erro}
        </Alert>
        <Button as={Link} to="/" variant="secondary">
          Voltar para a lista
        </Button>
      </Container>
    );
  }

  // Nenhum aluno encontrado
  if (!aluno) {
    return (
      <Container className="mt-4">
        <Alert variant="warning" className="mb-3">
          Aluno não encontrado.
        </Alert>
        <Button as={Link} to="/" variant="secondary">
          Voltar para a lista
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">{aluno.nome}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                ID: {aluno.id}
              </Card.Subtitle>

              <Card.Text>
                <strong>Email:</strong> {aluno.email || "Não informado"}
                <br />
                <strong>Idade:</strong> {aluno.idade ?? "Não informada"}
                {/* Se a API tiver mais campos, é só ir adicionando aqui */}
              </Card.Text>

              <div className="d-flex justify-content-between mt-3">
                <Button as={Link} to="/" variant="secondary">
                  Voltar
                </Button>
                {/* espaço para futuros botões: editar, excluir, etc */}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

