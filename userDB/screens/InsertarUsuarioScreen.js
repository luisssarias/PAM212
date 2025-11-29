import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,
StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';

import { UsuarioController } from '../controllers/UsuarioController';
const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [modoEditar, setModoEditar] = useState(false);
  const [idEdicion, setIdEdicion] = useState(null);



  // Cargar usuarios desde BD
  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Inicializar y cargar datos
  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();

    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  // INSERT
  const handleAgregar = async () => {
    if (!nombre.trim()) return Alert.alert("Error", "Escribe un nombre");
    if (guardando) return;

    try {
      setGuardando(true);

      const usuarioCreado = await controller.crearUsuario(nombre.trim());

      Alert.alert(
        "Usuario Creado",
        `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`
      );

      setNombre('');

    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setGuardando(false);
    }
  };

  const handleEliminar = async (id) => {
    const confirmado = await confirmar("¿Seguro que deseas eliminar este usuario?");
    if (!confirmado) return;
    await eliminar(id);
  
  };

  {/* Función que sirve para cargar los datos al editarlos */}

  const handleEditar = (usuario) => {
    setModoEditar(true);
    setIdEdicion(usuario.id);
    setNombre(usuario.nombre);
  };

  {/* Función para actualizar los datos  */}

const handleActualizar = async () => {
  if (!nombre.trim()) return Alert.alert("Error", "Escribe un nombre");

  try {
    await controller.actualizarUsuario(idEdicion, nombre.trim());
    Alert.alert("Éxito", "Usuario actualizado correctamente");

    setModoEditar(false);
    setIdEdicion(null);
    setNombre('');
    cargarUsuarios();

  } catch (error) {
    Alert.alert("Error", error.message);
  }
};



  const eliminar = async (id) => {
    try {
        await controller.eliminarUsuario(id);
        cargarUsuarios(); 
    } catch (error) {
        Alert.alert("Error", error.message);
    }
  };

  const confirmar = async (mensaje) => {
    if (Platform.OS === "web") {
      return window.confirm(mensaje);
    } else {
      return new Promise((resolve) => {
        Alert.alert(
          "Confirmación",
          mensaje,
          [
            { text: "Cancelar", onPress: () => resolve(false), style: "cancel" },
            { text: "Aceptar", onPress: () => resolve(true) }
          ]
        );
      });
    }
  };

  // Render usuario
  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {
            new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }
        </Text>

        {/* Botón Eliminar */}

        <TouchableOpacity onPress={() => handleEliminar(item.id)} style={styles.botonEliminar}>
        <Text style={styles.textoEliminar}>Eliminar</Text>
        </TouchableOpacity>

        {/* Botón Editar */}

        <TouchableOpacity onPress={() => handleEditar(item)}>
        <Text style={{ color: "blue", fontWeight: "600" }}>Editar</Text>
        </TouchableOpacity>



      </View>
     </View>

  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>INSERT & SELECT</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === "web"
          ? "WEB (LocalStorage)"
          : `${Platform.OS.toUpperCase()} (SQLite)` }
      </Text>

      {/* INSERT */}
      <View style={styles.insertSection}>

        <Text style={styles.sectionTitle}>Insertar Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <TouchableOpacity
        style={[styles.button, guardando && styles.buttonDisabled]}
        onPress={modoEditar ? handleActualizar : handleAgregar}
        disabled={guardando}
        >
        <Text style={styles.buttonText}>
        {modoEditar ? "Actualizar Usuario" : guardando ? "Guardando..." : "Agregar Usuario"}
        </Text>
        </TouchableOpacity>
    </View>

      {/* SELECT */}
      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>
          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

          <TouchableOpacity
            style={styles.refreshButton}
            onPress={cargarUsuarios}
          >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
  botonEliminar: {
    paddingVertical: 4,
},

textoEliminar: {
    color: "red",
    fontSize: 14,
    fontWeight: "600",
},
});
