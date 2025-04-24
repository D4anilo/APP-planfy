import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Image } from 'expo-image'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import Header from '../components/Header';
import Adicionar from '../components/Adicionar';
import TaskCreator from '../components/CrieTask';
import 'react-native-gesture-handler';

export default function TaskScreen() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />

        <View style={styles.bordaContainer}>
          <Image
            style={styles.borda2}
            source={require("../../assets/bordas2.png")} />
        </View>

        <View style={styles.task}>
          <TaskCreator/>
        </View>

        <View style={styles.adc}>
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
  bordaContainer: {
    marginTop: -60,
    paddingBottom: 0,
    zIndex: '-1'
  },
  borda2: {
    width: 180,
    height: 180
  },
  adc: {
    paddingTop:810,
    position: 'fixed'
  },

});
