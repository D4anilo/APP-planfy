import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Editar({ name, days, time }) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                {name}
            </Text>

            <View style={styles.divPai}>
                <View style={styles.divFilho}>

                    <View style={styles.hora}>
                        {time}
                    </View>

                    <View style={styles.data}>
                        {days.map((day, index) => (
                            <Text key={index} style={styles.data}>
                                {day}
                            </Text>
                        ))}
                    </View>

                </View>

                <View style={styles.editExcluir}>
                    <Image
                        style={styles.icon}
                        source={require("../../assets/Edit.png")}
                    />

                    <Image
                        style={styles.icon}
                        source={require("../../assets/Excluir.png")}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    divPai: {
        gap: 14,
        alignItems: 'center',
        flexDirection: 'row',
    },
    divFilho: {
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    hora: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    data: {
        fontSize: 12,
        fontWeight: 'regular',
    },
    icon: {
        width: 20,
        height: 20,
    },
    editExcluir: {
        flexDirection: 'row',
        gap: 3
    }
})