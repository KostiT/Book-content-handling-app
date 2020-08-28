import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import HTML from "react-native-render-html";
import { LORA_REGULAR_FONT, COLORS } from "../theme";

export default function Content({ content, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.7} disabled={!onPress} onPress={onPress}>
      <HTML html={content} tagsStyles={{ p: styles.paragraph }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    color: COLORS.black,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 20,
    fontFamily: LORA_REGULAR_FONT,
  },
});
