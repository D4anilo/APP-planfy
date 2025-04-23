import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Image } from 'expo-image';

export default function Login() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.login}>
                    <Text style={styles.titulo}>Faça seu Login</Text>

                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

                    <TouchableOpacity style={styles.botaoLogar} onPress={() => console.log("Login pressionado")}>
                        <Text style={styles.textBotao}>Logar</Text>
                    </TouchableOpacity>

                    <View style={styles.containerGoogle}>
                        <Image
                            style={styles.loginGoogle}
                            source={require("../../assets/google.png")}
                        />
                    </View>

                    <Text style={styles.textCriar}>Caso ainda não tenha uma conta. Crie uma</Text>
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        width: '100%',
        borderRadius: 20,
    },
    login:{
        backgroundColor: '#E9DBDF',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        boxShadow: '3px 2px 3px #999999',

    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
    input: {
        width: '95%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        backgroundColor: 'white',
        color: '#7A7A7A',
        fontWeight: 'bold'
    },
    // Estilos para o botão customizado
    botaoLogar: {
        width: 80,
        backgroundColor: '#6381A8',
        borderRadius: 25,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    textBotao: {
        color: '#fff',             // Cor do texto
        fontSize: 18,              // Tamanho da fonte
        fontWeight: 'bold',        // Negrito
        textAlign: 'center',      // Centraliza o texto
    },
    containerGoogle: {
        marginVertical: 20,
    },
    loginGoogle: {
        width: 180,
        height: 35,
        borderRadius: 35
    },
    textCriar: {
        marginTop: 0,
        fontWeight: 'bold',
        fontSize: 13,
        padding: 5,
        textAlign: 'center'
    }
});
