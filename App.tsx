import React from "react";
import Welcome from "./screens/Welcome";
//custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import RootStack from "./navigators/RootStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
  <RootStack />
  );
}
