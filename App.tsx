import React from "react";
import Tabbar from "./src/Tabbar";
import { createStackNavigator } from "@react-navigation/stack";
import Examples from "./src/Expamles";
import VoiceRecord from "./src/VoiceRecord";
import LoadAssets from "./src/components/LoadAssets";
const AppNavigator = createStackNavigator();
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};
const App = () => {
  return (
    <LoadAssets {...{ fonts }}>
      <AppNavigator.Navigator initialRouteName="Examples">
        <AppNavigator.Screen component={Examples} name="Examples" />
        <AppNavigator.Screen component={Tabbar} name="Tabbar" />
        <AppNavigator.Screen component={VoiceRecord} name="VoiceRecord" />
      </AppNavigator.Navigator>
    </LoadAssets>
  );
};

export default App;
