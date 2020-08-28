import React from "react";
import { StyleSheet } from "react-native";
import Dash from "react-native-dash";
import { COLORS } from "../theme";

export default function Separator({ style }) {
  return (
    <Dash
      dashGap={12}
      dashLength={4}
      dashThickness={4}
      dashColor={COLORS.darkGreen}
      dashStyle={styles.dashStyle}
      style={[styles.container, style]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dashStyle: {
    borderRadius: 2,
  },
});
