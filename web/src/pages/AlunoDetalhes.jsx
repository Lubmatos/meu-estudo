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
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card style={{ maxWidth: "600px", width: "100%" }} className="shadow">
        <Card.Body>
          <h2 className="text-center mb-4">{aluno.nome}</h2>

          <p><strong>ID:</strong> {aluno.id}</p>
          <p><strong>Turma:</strong> {aluno.turma || "Não informada"}</p>
          <p><strong>Curso:</strong> {aluno.curso || "Não informado"}</p>
          <p><strong>Matrícula:</strong> {aluno.matricula || "Não informada"}</p>

          <div className="text-center mt-4">
            <Link to="/" className="btn btn-secondary">
              Voltar
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
