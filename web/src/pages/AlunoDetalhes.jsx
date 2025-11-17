import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAlunoById } from "../api/alunosApi";
import { Container, Card, Button, Spinner } from "react-bootstrap";

export default function AlunoDetalhes() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    getAlunoById(id).then((res) => setAluno(res.data));
  }, [id]);

  if (!aluno) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container 
      className="d-flex justify-content-center align-items-start mt-4"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ maxWidth: "600px", width: "100%" }}>
        <Card.Body>
          <h2 className="text-center mb-3">{aluno.nome}</h2>

          <div className="mb-2"><strong>ID:</strong> {aluno.id}</div>
          <div className="mb-2"><strong>Turma:</strong> {aluno.turma || "Não informada"}</div>
          <div className="mb-2"><strong>Curso:</strong> {aluno.curso || "Não informado"}</div>
          <div className="mb-4"><strong>Matrícula:</strong> {aluno.matricula || "Não informada"}</div>

          <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-secondary">Voltar</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
