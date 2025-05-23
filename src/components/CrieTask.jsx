import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const TaskCreator = () => {
  const [taskName, setTaskName] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [time, setTime] = useState("");
  const [repeatTask, setRepeatTask] = useState(false);

  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  const toggleDay = (index) => {
    setSelectedDays((prev) =>
      prev.includes(index) ? prev.filter((d) => d !== index) : [...prev, index]
    );
  };

  const addTask = () => {
    if (!taskName || !time || selectedDays.length === 0) {
      alert("Preencha todos os campos!");
      return;
    }

    const newTask = {
      name: taskName,
      days: selectedDays,
      time: time,
      repeat: repeatTask,
    };

    console.log("Tarefa adicionada:", newTask);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADICIONE UMA NOVA TAREFA</Text>

      <TextInput
        style={styles.input}
        placeholder="Nomeie a tarefa"
        value={taskName}
        onChangeText={setTaskName}
      />

      <View style={styles.daysContainer}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.day, selectedDays.includes(index) && styles.selectedDay]}
            onPress={() => toggleDay(index)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Defina a hora"
        value={time}
        onChangeText={setTime}
      />

      <View style={styles.card}>
        <Text style={styles.cardText}>Repetir a tarefa?</Text>
        <TouchableOpacity
          style={[styles.checkbox, repeatTask && styles.checkedBox]}
          onPress={() => setRepeatTask(!repeatTask)}
        />
      </View>

      {/* Botão "Adicionar tarefa" */}
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Adicionar tarefa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ffffff", backgroundColor: "#ffffff", padding: 15, borderRadius: 50, marginBottom: 20 },
  daysContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 20, backgroundColor: "#ffffff", padding: 1.5, borderRadius: 50 },
  day: { padding: 10, margin: 5, borderRadius: 20, backgroundColor: "#ffffff" },
  selectedDay: { backgroundColor: "#6381A8" },
  dayText: { color: "black", fontWeight: "bold" },
  card: { backgroundColor: "#ffffff", flexDirection: "row", alignItems: "center", padding: 15, borderWidth: 0, borderRadius: 50 },
  cardText: { flex: 1, fontSize: 16 },
  checkbox: { width: 20, height: 20, borderWidth: 2, borderRadius: 5 },
  checkedBox: { backgroundColor: "#6381A8" },

  // Estilos do botão "Adicionar tarefa"
  addButton: { backgroundColor: "#6381A8", padding: 15, borderRadius: 8, marginTop: 20, alignItems: "center" },
  addButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },

  bold: {
    fontWeight: 'bold', // Indicações em negrito
  },
});

export default TaskCreator;
