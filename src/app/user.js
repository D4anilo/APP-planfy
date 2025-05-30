import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Image } from 'expo-image'
import Header from '../components/Header';

export default function UserScreen() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        
        <View style={styles.foto}>
          <Image
            style={styles.borda}
            source={require("../../assets/bordas3.png")}
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
    backgroundColor: '#F3F3F3',
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
  },
  button: {
    margin: 15
  }
});
