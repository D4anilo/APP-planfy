import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image'
import CriarLogin from '../components/CriarLogin';
import { ScrollView } from 'react-native-web';

export default function Cadastro() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.bordaContainer}>
          <Image
            style={styles.borda2}
            source={require("../../assets/bordas2.png")} />
        </View>

        <View style={styles.login}>
          <CriarLogin/>
        </View>

        <View style={styles.bordaContainer2}>
          <Image
            style={styles.borda4}
            source={require("../../assets/bordas4.png")} />
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
  login: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bordaContainer: {
    marginTop: -60,
    paddingBottom: 0,
    zIndex: '-1'
  },
  borda2: {
    width: 180,
    height: 180
  },
  bordaContainer2: {
    paddingTop: 25,
    alignItems: 'flex-end',
    zIndex: -1
  },
  borda4: {
    width: 180,
    height: 130
  },
  borda: {
    width: 130,
    height: 130
  },
  adc: {
    paddingTop:810,
    position: 'fixed'
  },

});
