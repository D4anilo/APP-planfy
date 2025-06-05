import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Semana from '../../../components/Semana';

export default function HomeScreen() {

  return (
    <ScrollView>
      <View style={styles.container}>

        <Semana />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    width: '100%'
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
