import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const PlaceList = ({ places }) => {
  const navigation = useNavigation();
  function details(id) {
    navigation.navigate("Place Detail", {
      placeId: id,
    });
  }
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>No places yet..</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={details} />}
    />
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    color: Colors.primary200,
  },
  container: {
    margin: 24,
  },
});
