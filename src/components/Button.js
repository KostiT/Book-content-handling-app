import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { COLORS } from "../theme";

export default function Button({ title, style, ...props }) {
  return (
    <TouchableOpacity
      style={[style, styles.button]}
      activeOpacity={0.7}
      {...props}
    >
      <CustomText style={styles.title} bold>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.green,
    padding: 20,
    borderRadius: 15,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    textAlign: "center",
  },
});
