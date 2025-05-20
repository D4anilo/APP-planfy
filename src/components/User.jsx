import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

export default function User() {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.foto}
            source={require('../../assets/User.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        width: '100%',
    },
    foto: {
        width:  125,
        height: 125,
        borderRadius: 100,
        boxShadow: '1px 1px 6px black',
    },
})