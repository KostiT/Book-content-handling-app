import React, { useMemo, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import Separator from "./Separator";
import Button from "./Button";
import CustomText from "./CustomText";

export default function Choice({ options, onChoose }) {
  const displayOptions = useMemo(
    () => options.filter(({ target, text }) => !!target && !!text),
    [options]
  );

  const onOptionPress = useCallback(
    (target) => () => {
      if (onChoose && target) {
        onChoose(target);
      }
    },
    [onChoose]
  );

  if (!displayOptions.length) {
    return null;
  }

  return (
    <View
      style={{
        alignSelf: "stretch",
      }}
    >
      <Separator />
      <CustomText style={styles.title} bold>
        Make a choice
      </CustomText>
      {displayOptions.map(({ target, text }) => (
        <Button
          key={target}
          title={text}
          style={styles.choiceButton}
          onPress={onOptionPress(target)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    textAlign: "center",
  },
  choiceButton: {
    marginVertical: 5,
  },
});
