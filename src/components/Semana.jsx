import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useAppStore from "../app/UseAppStore";

const Semana = () => {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const fullDayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  const today = new Date();
  let todayIndex = today.getDay(); // 0 = Domingo

  const { diaSelecionado, setDiaSelecionado } = useAppStore();

  const dayNumbers = Array.from({ length: 7 }, (_, i) => {
    const newDate = new Date();
    newDate.setDate(today.getDate() - todayIndex + i);
    return newDate;
  });

  const formatTitle = (date) => {
    const diffDays = Math.floor((date - new Date(today.setHours(0, 0, 0, 0))) / (1000 * 60 * 60 * 24));
    if (diffDays === -1) return "Ontem";
    if (diffDays === 0) return "Hoje";
    if (diffDays === 1) return "Amanhã";

    const dayName = fullDayNames[date.getDay()];
    const day = date.getDate();
    const month = date.toLocaleDateString("pt-BR", { month: "long" });
    const year = date.getFullYear();
    return `${dayName} - ${day} de ${month} de ${year}`;
  };

  const selectedDate = dayNumbers[diaSelecionado];

  return (
    <View style={[styles.container, styles.shadowBox]}>
      <Text style={styles.title}>{formatTitle(selectedDate)}</Text>
      <View style={styles.row}>
        {days.map((day, index) => {
          const isToday = index === todayIndex;
          const isSelected = index === diaSelecionado;
          return (
            <TouchableOpacity
              key={index}
              style={styles.dayWrapper}
              onPress={() => setDiaSelecionado(index)}
            >
              <Text style={[styles.dayLabel, isSelected && styles.dayLabelToday]}>
                {day}
              </Text>
              <View style={[styles.dayCircle, isSelected && styles.dayCircleToday]}>
                <Text style={[styles.dayNumber, isSelected && styles.dayNumberToday]}>
                  {dayNumbers[index].getDate()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CBD5E1",
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 15,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayWrapper: {
    alignItems: "center",
    width: 40,
  },
  dayLabel: {
    fontSize: 15,
    color: "#9E9E9E",
    marginBottom: 10,
  },
  dayLabelToday: {
    color: "#000000",
    fontWeight: "bold",
  },
  dayCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#B1C1D2",
    justifyContent: "center",
    alignItems: "center",
  },
  dayCircleToday: {
    backgroundColor: "#718EAD",
    borderWidth: 2,
    borderColor: "#718EAD",
  },
  dayNumber: {
    fontSize: 15,
    color: "#3D3D3D",
  },
  dayNumberToday: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Semana;
