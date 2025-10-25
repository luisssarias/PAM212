import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  Animated,
  Dimensions,
  ImageBackground,
  Switch,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function Repaso1Screen() {
  const [showMain, setShowMain] = useState(false);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(slideText, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
      delay: 800,
    }).start();

    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(async () => {
        await SplashScreen.hideAsync();
        setShowMain(true);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  const enviarDatos = () => {
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      nombre.trim() === "" ||
      correo.trim() === ""
    ) {
      Alert.alert("Error", "Por favor completa todos los campos");
      setMensaje("Faltan campos por llenar");
      return;
    } else if (!correoValido.test(correo)) {
      Alert.alert("Error", "Por favor ingresa un correo electrónico válido");
      setMensaje("Correo no válido");
      return;
    } else if (!isEnabled) {
      Alert.alert("Aviso", "Debes aceptar los términos y condiciones");
      setMensaje("Debes aceptar los términos y condiciones");
      return;
    } else {
      Alert.alert("¡Éxito!", "Datos enviados correctamente");
      setMensaje("Datos enviados correctamente");
    }
  }

  if (showMain) {
    return (
      <ImageBackground
        source={require("../assets/PAISAJE.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={styles.text}>¡Bienvenido!</Text>

          <Text style={styles.title}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Escribe tu correo"
            value={correo}
            onChangeText={setCorreo}
          />

          <Button title="Registrarse" onPress={enviarDatos} />
          <Text style={styles.mensaje}>{mensaje}</Text>
          <View>
            <Text>Aceptar terminos y condiciones</Text>
            <Text>{isEnabled}</Text>
            <Switch
              value={isEnabled}
              onValueChange={toggleSwitch}
            />
          </View>
        </View>
      </ImageBackground>
    );
    
  }
  return (
    <Animated.View style={[styles.container, { opacity: fadeOut }]}>
      <Animated.Image
        source={require("../assets/images.png")}
        resizeMode="contain"
        style={[styles.logoImage, { transform: [{ scale: scaleLogo }] }]}
      />
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: slideText }] }]}
      >Cargando...
      </Animated.Text>
      <Animated.View
        style={[
          styles.loader,
          {
            opacity: fadeLogo,
            transform: [
              {
                translateX: slideText.interpolate({
                  inputRange: [0, height / 2],
                  outputRange: [0, -50],
                }),
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#000000ff",
    borderRadius: 3,
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.56)",
    padding: 20,
    borderRadius: 10,
    width: "85%",
  },
  text: {
    color: "black",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffffff",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    backgroundColor: "#ffffffff",
  },
  mensaje: {
    color: "#000000ff",
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic",
  },
});

