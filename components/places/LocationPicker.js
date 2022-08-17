import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CustomBtn from "../Ui/CustomBtn";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
const LocationPicker = () => {
  const [info, request] = useForegroundPermissions();
  const [location, setLocation] = useState();
  async function varifyPermission() {
    if (info.status === PermissionStatus.UNDETERMINED) {
      const permission = await request();
      return permission.granted;
    }
    if (info.status == PermissionStatus.DENIED) {
      return Alert.alert("Permission denied for accesseing location");
    }
    return true;
  }
  async function currentLocation() {
    const isgranted = await varifyPermission();

    if (!isgranted) {
      return;
    }
    const locationres = await getCurrentPositionAsync();
    setLocation(locationres);
    console.log(locationres);
  }
  async function chooseLocation() {}
  return (
    <View>
      <View style={styles.container}></View>
      <View style={styles.btns}>
        <CustomBtn icon="location" onPress={currentLocation}>
          Locate User
        </CustomBtn>
        <CustomBtn icon="map" onPress={chooseLocation}>
          Locate on map
        </CustomBtn>
      </View>
    </View>
  );
};
export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 8,
    marginVertical: 8,
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
