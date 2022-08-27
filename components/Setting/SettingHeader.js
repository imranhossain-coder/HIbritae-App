import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Antdesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
const SettingHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Antdesign
            name="arrowleft"
            size={35}
            color="white"
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>

        <Text style={{ color: "white", fontSize: 18, marginLeft: 10 }}>
          Menu
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "black",
          height: 36,
          width: 36,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 30,
        }}
      >
        <FontAwesome name="search" size={23} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default SettingHeader;
