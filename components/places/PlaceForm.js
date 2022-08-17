import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
// import LocationPicker from "./LocationPicker";
import Button from "../Ui/Button";
import { Place } from "../../Models/place";

const PlaceForm = ({ passData }) => {
  const [title, setTitle] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [address, setAddress] = useState();
  function handleTitle(text) {
    setTitle(text);
  }
  function handleAddress(text) {
    setAddress(text);
  }
  function addplace() {
    // console.log(title);
    // console.log(selectedImage);
    const place = new Place(selectedImage.uri, title, address);
    passData(place);
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleTitle}
        value={title}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleAddress}
        value={address}
      />
      <ImagePicker selectImage={setSelectedImage} />
      {/* <LocationPicker /> */}
      <Button onPress={addplace}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  label: {
    color: Colors.primary500,
    marginBottom: 6,
    fontWeight: "bold",
  },
  container: {
    padding: 24,
  },
  input: {
    backgroundColor: Colors.primary100,
    // color: Colors.primary100,
    marginVertical: 8,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
  },
});
