import React from "react";
import { Text, StyleSheet } from "react-native";
import { LORA_REGULAR_FONT, LORA_BOLD_FONT, COLORS } from "../theme";

export default function CustomText({ style, bold, ...props }) {
  return (
    <Text {...props} style={[styles.default, !!bold && styles.bold, style]} />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: LORA_REGULAR_FONT,
    color: COLORS.black,
  },
  bold: {
    fontFamily: LORA_BOLD_FONT,
  },
});
