import { View, Text } from "react-native";
import React from "react";
import SettingHeader from "../components/Setting/SettingHeader";
import { Divider } from "react-native-elements/dist/divider/Divider";
import SettingMenu from "../components/Setting/SettingMenu";
const SettingScreen = () => {
  return (
    <View style={{ height: "100%", backgroundColor: "#242526" }}>
      <SettingHeader />
      <Divider orientation="horizontal" style={{ marginTop: 13 }} />
      <SettingMenu />
    </View>
  );
};

export default SettingScreen;
