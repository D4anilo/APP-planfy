import { StyleSheet, View, Text } from "react-native"
import { Image } from "expo-image"
import { Link } from 'expo-router';

export default function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={require("../../assets/Logo.png")}
                />
            </View>

            <View >
                <Link href="/user">
                    <Image
                        style={styles.perfil}
                        source={require("../../assets/User.png")}
                    />
                </Link>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        boxShadow: '5px 2px 6px #999999',
        backgroundColor: 'white'
    },
    logo: {
        width: 50,
        height: 50
    },
    perfil: {
        width: 27,
        height: 27
    }
})