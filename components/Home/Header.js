import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import HeaderMenu from "./HeaderMenu";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: 10,
                  color: "white",
                  marginLeft: 10,
                  fontWeight: "bold",
                }}
              >
                Esomaz
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.HeaderIcon}>
              <Ionicons
                style={styles.icon}
                name="search"
                color="white"
                size={28}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.HeaderIcon}
              onPress={() => navigation.navigate("SettingScreen")}
            >
              <Entypo style={styles.icon} size={30} color="white" name="menu" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <HeaderMenu />
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  HeaderIcon: {
    paddingLeft: 5,
    paddingTop: 5,
    marginTop: 4,
    marginRight: 15,
    backgroundColor: "#3a3b3c",
    borderRadius: 100,
    width: 40,
    height: 40,
  },
});

export default Header;
