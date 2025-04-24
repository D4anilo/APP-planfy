import { StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image'
import { Link, useRouter } from 'expo-router';

export default function Adicionar() {

    const router = useRouter()
    
    return (
        <View style={styles.container}>
            <View style={styles.botoes}>
                <Link href="/home">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/home.png")}
                    />
                </Link>
            </View>

            <View style={styles.botoes}>
                <Link href="/criar_task.js">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/botaoAdd.png")}
                    />
                </Link>
            </View>

            <View style={styles.botoes}>
                <Link href="#">
                    <Image
                        style={styles.botao}
                        source={require("../../assets/calender.png")}
                    />
                </Link>
            </View>

            <View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
        backgroundColor: 'white',
        position: 'fixed',
        width: '100%',
        padding: 5
    },

    botao: {
        width: 50,
        height: 50
    }, 
});