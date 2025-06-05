import React from "react";
import { View, Text, StyleSheet } from "react-native";
//import { LinearGradient } from 'expo-linear-gradient';

const Semana = () => {
    const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    const today = new Date();
    let todayIndex = today.getDay(); // 0 = Domingo, 6 = Sábado

    const dayNumbers = Array.from({ length: 7 }, (_, i) => {
        const newDate = new Date();
        newDate.setDate(today.getDate() - todayIndex + i);
        return newDate.getDate();
    });

    return (
        <View style={[styles.container, styles.shadowBox]}>
            
            <Text style={styles.title}>Hoje</Text>
            <View style={styles.row}>
                {days.map((day, index) => {
                    const isToday = index === todayIndex;
                    return (
                        <View key={index} style={styles.dayWrapper}>
                            <Text style={[styles.dayLabel, isToday && styles.dayLabelToday]}>
                                {day}
                            </Text>
                            <View style={[styles.dayCircle, isToday && styles.dayCircleToday]}>
                                <Text style={[styles.dayNumber, isToday && styles.dayNumberToday]}>
                                    {dayNumbers[index]}
                                </Text>
                            </View>
                        </View>
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
        elevation: 5, // Para Android
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
        color: "#3D3D3D", //cinza para o numero do dia
    },
    dayNumberToday: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
});

export default Semana;
