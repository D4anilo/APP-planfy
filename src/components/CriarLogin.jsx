import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import { Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.criar}>
                    <Text style={styles.titulo}>CRIE UMA CONTA</Text>

                    <TextInput style={styles.input} placeholder="Nome" />
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
                    <TextInput style={styles.input} placeholder="Nascimento" />

                    <View style={styles.botao}>
                        <Pressable style={styles.botaoLogar}>
                            <Link style={styles.textBotao} href={'/OpScreens'}>Criar Conta</Link>
                        </Pressable>
                    </View>
                    <Text style={styles.text_link}>Caso já tenha uma conta volte para <Link style={styles.destaque_text} href={'/'}>Login</Link></Text>
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
        backgroundColor: '#F3F3F3'
    },
    criar: {
        backgroundColor: '#E9DBDF',
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
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
    botao: {
        padding: 10
    },
    botaoLogar: {
        width: 140,
        backgroundColor: '#6381A8',
        borderRadius: 35,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 3,
    },
    textCriar: {
        marginTop: 0,
        fontWeight: 'bold',
        fontSize: 13,
        padding: 5,
        textAlign: 'center'
    },

    destaque_text: {
        color: '#6381A8',
        fontWeight: 'bold',
        fontSize: 13,
        padding: 5,
        textAlign: 'center'
    },

    text_link: {
        marginTop: 4,
        fontWeight: 'bold',
        fontSize: 14,
        padding: 5,
        textAlign: 'center'
    },
});
