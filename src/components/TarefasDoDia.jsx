import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import useAppStore from "../app/UseAppStore";

// Simulação de tarefas por dia
const tarefasMock = {
  0: ["Ir à feira", "Estudar React Native"],
  1: ["Reunião com o time", "Fazer exercícios"],
  2: ["Ir ao mercado", "Revisar código"],
  3: ["Consulta médica", "Planejar semana"],
  4: ["Enviar relatório", "Estudar Zustand"],
  5: ["Organizar arquivos", "Jantar com amigos"],
  6: ["Descansar", "Ver filme"],
};

const TarefasDoDia = () => {
  const { diaSelecionado } = useAppStore();
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simula busca de dados com delay
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const tarefasDoDia = tarefasMock[diaSelecionado] || [];
      setTarefas(tarefasDoDia);
      setLoading(false);
    }, 500); // simula tempo de resposta da API

    return () => clearTimeout(timeout);
  }, [diaSelecionado]);

  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas de {diasSemana[diaSelecionado]}</Text>

      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : tarefas.length === 0 ? (
        <Text style={styles.noTasks}>Nenhuma tarefa para hoje.</Text>
      ) : (
        <FlatList
          data={tarefas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.task}>{`\u2022 ${item}`}</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F5F9",
    padding: 16,
    marginTop: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#334155",
  },
  task: {
    fontSize: 16,
    marginBottom: 8,
    color: "#1E293B",
  },
  noTasks: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#64748B",
  },
});

export default TarefasDoDia;
