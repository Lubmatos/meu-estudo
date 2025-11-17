import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import AlunoDetalhesScreen from "../screens/AlunoDetalhesScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Lista de Alunos" }}
        />

        <Stack.Screen
          name="AlunoDetalhes"
          component={AlunoDetalhesScreen}
          options={{ title: "Detalhes do Aluno" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
