import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";
import CustomBtn from "../Ui/CustomBtn";

const ImagePicker = ({ selectImage }) => {
  const [image, setImage] = useState();
  const [info, request] = useCameraPermissions();
  async function requestCamera() {
    if (info.status === PermissionStatus.UNDETERMINED) {
      const status = await request();
      return status.granted;
    }
    if (info.status == PermissionStatus.DENIED) {
      Alert.alert("Permission denied for accesseing camera");
    }
    return true;
  }

  async function imageHandler() {
    const isgranted = await requestCamera();
    if (!isgranted) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(image.uri);
    selectImage(image);
  }

  let content = <Text>No image selected</Text>;
  if (image) {
    content = <Image style={styles.image} source={{ uri: image }} />;
  }
  return (
    <View>
      <View style={styles.container}>{content}</View>
      <CustomBtn onPress={imageHandler} icon="camera">
        Take an Image
      </CustomBtn>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 8,
    marginVertical: 8,
  },
});
