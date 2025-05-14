import { StyleSheet, Text, View, TextInput } from "react-native";
import { Image } from "expo-image";

export default function InfoPerfil({nome, senha, email}) {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.item}>
                    <Text style={styles.text}> Nome: {nome} </Text>
                    <Text style={styles.edit}>Editar</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.text}> Senha: {senha} </Text>
                    <Text style={styles.edit}>Editar</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.text}> Email: {email} </Text>
                    <Text style={styles.edit}>Editar</Text>
                </View>
            </View>

            <View style={styles.exit}>       
                <Text style={styles.textExit}>Sair da Conta</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '85%',
        height: 210,
        borderRadius: 10,
        boxShadow: '1px 2px 6px #999999',
        padding: 10,
        gap: 10,
    },
    item: {
        flexDirection: 'column',
        width: '100%',

    },
    info: {
        gap: 10,
    },
    text:{
        fontSize: 16,
    },
    imageExit: {
        width: 20,
        height: 20,
    },
    edit: {
        color: '#6381A8',
        fontSize: 16,
        fontWeight: 'bold',

    },
    textExit: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    }
})