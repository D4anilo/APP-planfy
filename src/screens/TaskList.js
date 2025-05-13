import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View>
      <Text>Lista de Tarefas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.taskName}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TaskList;
