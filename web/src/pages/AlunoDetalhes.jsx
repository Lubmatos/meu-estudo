import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlunoById } from "../api/alunosApi";
import { Container } from "react-bootstrap";

export default function AlunoDetalhes() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    getAlunoById(id).then((res) => setAluno(res.data));
  }, [id]);

  if (!aluno) return <p>Carregando...</p>;
