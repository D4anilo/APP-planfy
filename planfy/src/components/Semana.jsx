import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Semana = () => {
    const days = [
        "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" // Abreviação dos dias da semana
    ];

    const today = new Date();
    let todayIndex = today.getDay() - 1; // Obtém o índice do dia atual (0 = Domingo, 1 = Segunda...)
    if (todayIndex === -1) todayIndex = 6; // Ajusta para que Domingo seja o último índice

    const dayNumbers = Array.from({ length: 7 }, (_, i) => {
        const newDate = new Date();
        newDate.setDate(today.getDate() - todayIndex + i);
        return newDate.getDate();
    });

    // Função para obter o mês de forma formatada (ex: 03 para março)
    const getFormattedMonth = (date) => {
        const month = date.getMonth() + 1; // getMonth() retorna de 0 (Janeiro) até 11 (Dezembro)
        return month < 10 ? `0${month}` : month; // Garante que o mês tenha dois dígitos
    };

    const formattedDates = dayNumbers.map((day, index) => {
        const date = new Date();
        date.setDate(today.getDate() - todayIndex + index);
        const month = getFormattedMonth(date);
        return { day, month };
    });

    return (
        <View style={styles.card}>
            <View style={styles.row}>
                {days.map((day, index) => (
                    <View
                        key={index}
                        style={[styles.dayContainer, index === todayIndex && styles.today]}
                    >
                        <Text style={styles.dayText}>{day}</Text>
                        <Text style={styles.dayNumber}>{formattedDates[index].day}/{formattedDates[index].month}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 2, // Tamanho fixo do padding
        borderRadius: 16,
        shadowColor: "#000",
        elevation: 4,
        alignItems: "center",
        marginTop: 0, // Distância pequena do topo da tela
        width: '100%' // Largura fixa do card
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
    },
    dayContainer: {
        padding: 5, // Padding fixo para os cards
        backgroundColor: "#ffffff", // Cor de fundo dos cards
        borderRadius: 6,
        margin: 5, // Margem entre os cards
        width: 39, // Largura fixa para cada card
        height: 45,
        alignItems: "center",
        justifyContent: 'center',
        boxShadow: '1px 1px 1px'
    },
    today: {
        backgroundColor: "#6381A8", // Cor para destacar o dia atual
    },
    dayText: {
        fontSize: 12, // Tamanho fixo da fonte para o nome do dia
        fontWeight: "bold",
        textAlign: "center",
    },
    dayNumber: {
        fontSize: 12, // Tamanho fixo do número do dia
        color: "black",
    },
});

export default Semana;

