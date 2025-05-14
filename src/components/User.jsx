import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

export default function User() {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.foto}
            source={'https://lh3.googleusercontent.com/a/ACg8ocJuZ7ak_S9dm7ialjVc-QWfm-gbdwqlMGeEP-r8LjMzAQ96lJ5l=s288-c-no'}
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
        width: 100,
        height: 100,
        borderRadius: 50,
        boxShadow: '1px 1px 6px black',
    },
})