// Zona de declaraciones:
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

// Main: Zona de componentes
export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Contador: {contador} </Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
      <Button title="Quitar" onPress={() => setContador(contador - 1)} />
      <Button title="Reiniciar" onPress={() => setContador(0)} />
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos: Zona de estilos, componentes y su posición
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
