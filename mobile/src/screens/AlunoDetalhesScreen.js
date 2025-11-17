import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getAlunoById } from "../api/alunosApi";

export default function AlunoDetalhesScreen({ route }) {
  const { id } = route.params;
  const [aluno, setAluno] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    getAlunoById(id)
      .then((res) => setAluno(res.data))
      .catch((err) => {
        console.log("Erro ao buscar aluno:", err.message);
        setErro("Não foi possível carregar os detalhes do aluno.");
      });
  }, [id]);

  if (erro) {
    return (
      <View style={styles.container}>
        <Text style={styles.erro}>{erro}</Text>
      </View>
    );
  }

  if (!aluno) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{aluno.nome}</Text>

      <Text style={styles.item}>
        <Text style={styles.label}>ID:</Text> {aluno.id}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.label}>Turma:</Text> {aluno.turma}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.label}>Curso:</Text> {aluno.curso}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.label}>Matrícula:</Text> {aluno.matricula}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: { fontSize: 18, marginBottom: 8 },
  label: { fontWeight: "bold" },
  erro: {
    color: "red",
    textAlign: "center",
  },
});
