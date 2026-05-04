import { CameraView, useCameraPermissions } from "expo-camera";
import * as Location from "expo-location";
import { useRef, useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [foto, setFoto] = useState<string | null>(null);
  const [localizacao, setLocalizacao] = useState<string>("Não capturada");

  const cameraRef = useRef<any>(null);

  async function tirarFoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setFoto(photo.uri);
    }
  }

  async function pegarLocalizacao() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setLocalizacao("Permissão negada");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});

    setLocalizacao(
      `Lat: ${loc.coords.latitude}
Long: ${loc.coords.longitude}`,
    );
  }

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="Permitir câmera" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        PoC Integrações Nativas
      </Text>

      <Text>📍 Localização:</Text>
      <Text>{localizacao}</Text>

      <Button title="Capturar Localização" onPress={pegarLocalizacao} />

      <View
        style={{
          height: 350,
          overflow: "hidden",
          borderRadius: 15,
        }}
      >
        <CameraView ref={cameraRef} style={{ flex: 1 }} />
      </View>

      <Button title="Tirar Foto" onPress={tirarFoto} />

      {foto && (
        <>
          <Text>📷 Foto Capturada:</Text>

          <Image
            source={{ uri: foto }}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
            }}
          />
        </>
      )}
    </ScrollView>
  );
}
