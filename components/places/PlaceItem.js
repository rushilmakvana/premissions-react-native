import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable style={styles.container} onPress={onSelect.bind(this, place.id)}>
      {/* <View> */}
      <Image style={styles.image} source={{ uri: place.imguri }} />
      <View style={styles.item}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
      {/* </View> */}
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 4,
    flex: 1,
    elevation: 4,
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.75,
    marginVertical: 7,
  },
  image: {
    flex: 1,
    height: 100,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  item: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 1,
    // color: "white",
  },
  address: {
    // marginVertical: 1,
  },
});
