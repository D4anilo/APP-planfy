import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import TaskCreator from "./TaskCreator";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    if (editingTask) {
      // Editar tarefa existente
      setTasks(tasks.map(t => (t.id === editingTask.id ? task : t)));
      setEditingTask(null);
    } else {
      // Adicionar nova tarefa
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  return (
    <View style={styles.container}>
      <TaskCreator addTask={addTask} editingTask={editingTask} />

      <Text style={styles.title}>Tarefas Criadas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.taskName} - {item.time}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => editTask(item)} style={styles.editButton}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  taskItem: { flexDirection: "row", justifyContent: "space-between", padding: 15, borderWidth: 1, borderRadius: 8, marginBottom: 10 },
  taskText: { fontSize: 16 },
  actions: { flexDirection: "row" },
  editButton: { backgroundColor: "#6381A8", padding: 5, marginRight: 10, borderRadius: 5 },
  deleteButton: { backgroundColor: "red", padding: 5, borderRadius: 5 },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default TaskManager;
