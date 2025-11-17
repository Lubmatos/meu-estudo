import axios from "axios";

const api = axios.create({
  baseURL: "https://proweb.leoproti.com.br",
});

export const getAlunos = () => api.get("/alunos");
export const getAlunoById = (id) => api.get(`/alunos/${id}`);
