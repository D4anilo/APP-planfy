import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function EditTask({ task, onSave }) {
    const [name, setName] = useState(task.name);
    const [days, setDays] = useState(task.days);
    const [time, setTime] = useState(task.time);

    const handleSave = () => {
        onSave({ ...task, name, days, time });
    };

    return (
        <View style={styles.container}>
            <Text>aaaa</Text>
        </View>
    );
}

StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        width: '95%',
        height: 30,
        borderRadius: 10,
        boxShadow: '5px 5px 5px #999999',
        flexDirection: 'row',
        gap: 10,
    }
});