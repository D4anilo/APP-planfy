import { StyleSheet, View } from "react-native";
import User from "../../../components/User";
import InfoPerfil from "../../../components/InfoPerfil";
import DesempenhoCard from '../../../components/DesempenhoCard';


export default function PerfilScreen() {
    return (
        <View style={styles.container}>
            
            <User />
            <View style={styles.perfil}>
                <InfoPerfil nome="Danilo" senha="*******" email="danilomorais@gmail.com"/>
            </View>
            
            <DesempenhoCard />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
    },
    perfil: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})