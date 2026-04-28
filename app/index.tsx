import { Stack } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Text style={styles.text}>CRA MOBILE</Text>
      </View>
  );
}
    const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      text:{
        fontSize: 24,
        textAlign: "center",
        width:"100%",
      },
});