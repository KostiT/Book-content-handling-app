import React from "react";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/AppContainer";
import { useFonts } from "expo-font";
import { LORA_REGULAR_FONT, LORA_BOLD_FONT, COLORS } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    [LORA_REGULAR_FONT]: require("./assets/fonts/Lora/Lora-Regular.ttf"),
    [LORA_BOLD_FONT]: require("./assets/fonts/Lora/Lora-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
