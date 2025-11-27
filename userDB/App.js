import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InsertarUsuarioScreen from './screens/InsertarUsuarioScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <InsertarUsuarioScreen></InsertarUsuarioScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
