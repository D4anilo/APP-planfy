import { StyleSheet, View, Text } from "react-native"
import { Image } from "expo-image"

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
                    <Image
                        style={styles.perfil}
                        source={require("../../assets/User.png")}
                    />
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
        width: 60,
        height: 60
    },
    perfil: {
        width:  38,
        height: 38
    }
})