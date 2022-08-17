import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";
const CustomBtn = ({ icon, onPress, children }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.7 }]}
    >
      <Ionicons
        style={styles.icon}
        size={18}
        color={Colors.primary500}
        name={icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: Colors.primary500,
  },
});
