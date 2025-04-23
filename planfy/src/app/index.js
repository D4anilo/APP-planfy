import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image'
import Header from '../components/Header';
import Semana from '../components/Semana';
import Adicionar from '../components/Adicionar';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Semana />
        
        <View style={styles.foto}>
          <Image
            style={styles.borda}
            source={require("../assets/bordas3.png")}
          />
        </View>

        <View style={styles.footer}>
          <Adicionar />
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  footer: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    paddingTop: 820,

  },

  borda: {
    marginLeft: '-20px',
    width: 130,
    height: 130
  },

  foto: {
    marginTop: 580
  }
});
