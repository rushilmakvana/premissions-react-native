import { Pressable, StyleSheet } from "react-native";
// import React from "react";
import { Ionicons } from "@expo/vector-icons";
const IconBtn = ({ icon, size, color, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
  },
});
