import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

export default function Login() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.login}>
                    <Text style={styles.titulo}>FAZER LOGIN</Text>

                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

                    <Pressable style={styles.botaoLogar}>
                        <Link style={styles.textBotao} href={'/OpScreens'}>Logar</Link>
                    </Pressable>

                    <View style={styles.containerGoogle}>
                        <Link href={'/OpScreens'}>
                            <Image
                                style={styles.loginGoogle}
                                source={require("../../assets/google.png")}
                            />
                        </Link>
                    </View>

                    <Text style={styles.textCriar}>Caso ainda não tenha uma conta
                        <Link style={styles.criarConta} href={'/cadastro'}> Crie uma conta</Link>
                    </Text>
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
    login: {
        backgroundColor: '#E9DBDF',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        boxShadow: '5px 5px 5px #999999',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 21,
        padding: 11
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
        width: 100,
        backgroundColor: '#6381A8',
        borderRadius: 35,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    textBotao: {
        color: '#fff',             // Cor do texto
        fontSize: 18,              // Tamanho da fonte
        fontWeight: 'bold',        // Negrito
        textAlign: 'center',      // Centraliza o texto
    },
    containerGoogle: {
        marginVertical: 5,
    },
    loginGoogle: {
        width: 200,
        height: 35,
        borderRadius: 35
    },
    textCriar: {
        marginTop: 4,
        fontWeight: 'bold',
        fontSize: 14,
        padding: 5,
        textAlign: 'center'
    },
    criarConta: {
        fontSize: 15,
        color: '#6381A8',
    }
});
