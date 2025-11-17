import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { getAlunos } from "../api/alunosApi";

export default function HomeScreen({ navigation }) {
  const [alunos, setAlunos] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    getAlunos()
      .then((res) => setAlunos(res.data))
      .catch((err) => {
        console.log("Erro ao buscar alunos:", err.message);
        setErro("Não foi possível carregar os alunos.");
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Alunos</Text>

      {erro && <Text style={styles.erro}>{erro}</Text>}

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.botao}
            onPress={() =>
              navigation.navigate("AlunoDetalhes", { id: item.id })
            }
          >
            <Text style={styles.botaoTexto}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          !erro ? (
            <Text style={styles.vazio}>Nenhum aluno encontrado.</Text>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  erro: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  vazio: {
    marginTop: 20,
    textAlign: "center",
    color: "#666",
  },
  botao: {
    backgroundColor: "#0d6efd",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
