import { StyleSheet } from "react-native";
import React from "react";
import PlaceForm from "../components/places/PlaceForm";
import { insertplace } from "../util/databse";

const Addplaces = ({ navigation }) => {
  async function passData(place) {
    await insertplace(place);
    navigation.navigate("AllPlaces");
  }
  return <PlaceForm passData={passData} />;
};

export default Addplaces;

const styles = StyleSheet.create({});
