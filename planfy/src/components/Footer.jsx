import { StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image'
import { Link } from 'expo-router';

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.botoes}>
                <Link href="(tabs)">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/home.png")}
                    />
                </Link>

                <Link href="/criarTarefas">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/botaoAdd.png")}
                    />
                </Link>

                <Link href="#">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/calender.png")}
                    />
                </Link>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        bottom: 0,
        backgroundColor: 'white',
        position: 'fixed',
        width: '100%',
        boxShadow: '5px 2px 6px #999999',
    },
    botoes: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 60,
        padding: 12,
    },
    botao: {
        width: 40,
        height: 40,
        padding: 18,
    }, 
});