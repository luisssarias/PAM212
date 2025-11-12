import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImageScreen from './ImageScreen';
import ScrollScreen from './ScrollScreen';
import ActivityScreen from './ActivityScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import FlatScreen from './FlatScreen';
import Repaso1Screen from './Repaso1Screen';
import ScrollScreen2 from './ScrollScreen2';

export default function MenuScreen () {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador': return <ContadorScreen/>
    case 'botones': return <BotonesScreen/>
    case 'TextInput': return <TextInputScreen/>
    case 'image': return <ImageScreen/>
    case 'scroll': return <ScrollScreen/>
    case 'activity': return <ActivityScreen/>
    case 'flatlist': return <FlatScreen/>
    case 'modal': return <ModalScreen/>
    case 'bottomsheet': return <BottomSheetScreen/>
    case 'repaso1': return <Repaso1Screen/>
    case 'ScrollScreen2': return <ScrollScreen2/>

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menu de Practicas</Text>

          <ScrollView style={{ width: '100%' }}>
            <Boton title="Pract: Contador" onPress={() => setScreen('contador')} />
            <Boton title="Pract: Botones" onPress={() => setScreen('botones')} />
            <Boton title="Pract: TextInput" onPress={() => setScreen('TextInput')} />
            <Boton title="Pract: Image" onPress={() => setScreen('image')} />
            <Boton title="Pract: ScrollView" onPress={() => setScreen('scroll')} />
            <Boton title="Pract: ActivityIndicator" onPress={() => setScreen('activity')} />
            <Boton title="Pract: Modal" onPress={() => setScreen('modal')} />
            <Boton title="Pract: BottomSheet" onPress={() => setScreen('bottomsheet')} />
            <Boton title="Pract: FlatList" onPress={() => setScreen('flatlist')} />
            <Boton title="Pract: Repaso 1" onPress={() => setScreen('repaso1')} />
            <Boton title="Pract: ScrollScreen2" onPress={() => setScreen('ScrollScreen2')} />
          </ScrollView>
        </View>
      )
  }
}

function Boton ({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#878787ff', 
    padding: 20,
    paddingTop: 50,
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffffff',
    marginBottom: 20
  },
  btn: {
    backgroundColor: '#334b7cff', 
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
    elevation: 3
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
});
