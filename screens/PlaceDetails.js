import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import { fetchplace } from "../util/databse";
// import Button from "../components/Ui/Button";

const PlaceDetails = ({ route, navigation }) => {
  const placeId = route.params.placeId;
  const [place, setPlace] = useState();
  //   const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchplace(placeId)
      .then((result) => {
        setPlace(result);
        navigation.setOptions({
          title: result.title,
        });
        // console.log(result.);
      })
      .catch((err) => {
        console.log(err);
      });
    // setLoading(false);
  }, [placeId]);
  if (!place) {
    return <></>;
  }
  return (
    <ScrollView>
      <Image source={{ uri: place.imguri }} style={styles.image} />
      <View style={styles.info}>
        {/* <Text style={styles.title}>{place.title}</Text> */}
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  info: {
    marginVertical: 12,
  },
  container: {
    padding: 24,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 4,
    color: Colors.primary400,
  },
  address: {
    fontSize: 17,
    textAlign: "center",
    color: Colors.primary400,
  },
});
