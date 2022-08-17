import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import IconBtn from "./components/Ui/IconBtn";
import { Colors } from "./constants/colors";
import Addplaces from "./screens/Addplaces";
import AllPlaces from "./screens/AllPlaces";
import PlaceDetails from "./screens/PlaceDetails";
import { init } from "./util/databse";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbinitialized, setDbinitialized] = useState(false);
  useEffect(() => {
    init()
      .then(() => {
        setDbinitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!dbinitialized) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconBtn
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={Addplaces}
            options={{
              title: "Add a new Place",
            }}
          />
          <Stack.Screen
            options={{
              title: "Place Details",
            }}
            name="Place Detail"
            component={PlaceDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
