// Zona de declaraciones:
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

// Main: Zona de componentes
export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text style ={styles.texto}> Contador: </Text>
      <Text style ={styles.texto2}> {contador} </Text>

      <View style={styles.contenedorBotones}>
      <Button color = "black" title="Incrementar" onPress={() => setContador(contador + 1)} />
      <Button color = "black" title="Quitar" onPress={() => setContador(contador - 1)} />
      <Button color = "black" title="Reiniciar" onPress={() => setContador(0)} />

      </View>

      <StatusBar style="auto" />
      
    </View>
  );
}

// Estilos: Zona de estilos, componentes y su posición
const styles = StyleSheet.create({
  container: {
    flex: 1, // Repartimos espacios
    backgroundColor: '#404040ff', //Da color al fondo de la app
    alignItems: 'center', // Mueve componentes en el eje x
    justifyContent: 'center', // Mueve componentes en el eje y
  },

  texto:{
    color: '#699adbff', // Color del texto
    fontSize: 30, // Tamaño del texto
    fontFamily: 'Times New Roman', // Tipo de letra
    fontWeight: 'bold', // Negrita
    fontStyle: 'italic', // Letra Aplastada
    textDecorationLine:'line-through', // Letra tachada
  },

   texto2:{
    color: '#e7dfdfff', // Color del texto
    fontSize: 40, // Tamaño del texto
    fontFamily: 'Courier', // Tipo de letra
    fontWeight: '400', // Negrita
    textDecorationLine:'underline', // Letra subrayada
  },
  contenedorBotones:{
    marginTop: 20, // Margen superior
    flexDirection: 'row', // Alinea los botones en fila
    gap: 15, // Espacio entre botones 
  },
});
