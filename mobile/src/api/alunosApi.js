import axios from "axios";

const api = axios.create({
  baseURL: "https://proweb.leoproti.com.br",
});

export function getAlunos() {
  return api.get("/alunos");
}

export function getAlunoById(id) {
  return api.get(`/alunos/${id}`);
}