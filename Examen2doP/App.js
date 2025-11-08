import React from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  ScrollView,
} from 'react-native';

const categorias = [
  {
    titulo: 'Deportes',
    data: ['Americano: El fútbol americano es un deporte norteamericano creado en los Estados Unidos en 1869, que deriva del rugby inglés y se practica actualmente en más de setenta países, aunque su popularidad es más intensa en Norteamérica.', 'Fútbol: El fútbol es un deporte de equipo que se juega entre dos equipos de once jugadores con una pelota esférica. Es el deporte más popular del mundo, con más de 4.000 millones de aficionados.'],
  },
  {
    titulo: 'Tecnología',
    data: ['Apple: Apple Inc. es una empresa de tecnología estadounidense que diseña, fabrica y comercializa productos electrónicos de consumo, software y servicios en línea.', 'Android: Android es un sistema operativo basado en Linux diseñado principalmente para dispositivos móviles con pantalla táctil, como teléfonos inteligentes y tabletas.'],
  },
  {
    titulo: 'Entretenimiento',
    data: ['HBO: HBO es una cadena de televisión por cable estadounidense que ofrece una variedad de programas originales, películas y documentales.', 'Netflix: Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas y documentales a sus suscriptores.'],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>+ Deportes y algo más</Text>
      <SectionList
        sections={categorias}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>* {item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { titulo } }) => (
          <Text style={styles.sectionHeader}>{titulo}</Text>
        )}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    color: '#00aaffff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  itemBox: {
    backgroundColor: '#1e1e1e',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  itemText: {
    color: '#ffffffff',
    fontSize: 20,
  },
  sectionHeader: {
    color: '#a600ffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
});