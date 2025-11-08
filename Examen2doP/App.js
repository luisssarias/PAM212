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
    data: ['Americano: El fútbol americano es un deporte norteamericano creado en los Estados Unidos en 1869, que deriva del rugby inglés y se practica actualmente en más de setenta países, aunque su popularidad es más intensa en Norteamérica.', 'Fútbol: El fútbol es un deporte de equipo que se juega entre dos equipos de once jugadores con una pelota esférica. Es el deporte más popular del mundo, con más de 4.000 millones de aficionados.', 'Béisbol: El béisbol es un deporte de equipo que se juega entre dos equipos de nueve jugadores cada uno. Es muy popular en Estados Unidos, América Latina y Asia.'],
  },
  {
    titulo: 'Tecnología',
    data: ['Apple', 'Android'],
  },
  {
    titulo: 'Entretenimiento',
    data: ['HBO', 'Netflix'],
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

export function imagenes() {



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
    color: '#fff',
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