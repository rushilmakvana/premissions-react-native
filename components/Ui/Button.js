import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

const Button = ({ onPress, children }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
      style={styles.container}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
  },
  text: {
    color: Colors.primary100,
    textAlign: "center",
    fontSize: 16,
  },
});
