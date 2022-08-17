import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PlaceList from "../components/places/PlaceList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/databse";

const AllPlaces = () => {
  const isFocused = useIsFocused();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      if (isFocused) {
        const places = await fetchPlaces();
        setPlaces(places);
        // console.log(places);
        // setPlaces((place) => [...place, route.params.place]);
      }
    }
    fetchdata();
  }, [isFocused]);

  //   console.log(route.params);
  return <PlaceList places={places} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
