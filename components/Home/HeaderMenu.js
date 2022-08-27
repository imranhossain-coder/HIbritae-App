import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";
import Fontawesome from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { selectOrigin, selectuser } from "../../components/slices/navSlices";
import { setOrigin } from "../../components/slices/navSlices";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const HeaderMenu = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const user = useSelector(selectuser);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.HeaderMenucontainer}>
        <TouchableOpacity
          style={styles.HeaderMenuicon}
          onPress={() => {
            dispatch(setOrigin("home"));
          }}
        >
          <Entypo
            name="home"
            color={origin === "home" ? "#1877f2" : "white"}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HeaderMenuicon}
          onPress={() => {
            dispatch(setOrigin("user-friends"));
          }}
        >
          <Fontawesome
            name="user-friends"
            color={origin === "user-friends" ? "#1877f2" : "white"}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HeaderMenuicon}
          onPress={() => {
            dispatch(setOrigin("messenger"));
            navigation.navigate("MessagingScreen");
          }}
        >
          <Fontawesome
            name="facebook-messenger"
            color={origin === "messenger" ? "#1877f2" : "white"}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HeaderMenuicon}
          onPress={() => {
            dispatch(setOrigin("bell"));
          }}
        >
          <Fontawesome
            name="bell"
            color={origin === "bell" ? "#1877f2" : "white"}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HeaderMenuicon}
          onPress={() => {
            dispatch(setOrigin("livetv"));
          }}
        >
          <MaterialIcons
            name="live-tv"
            color={origin === "livetv" ? "#1877f2" : "white"}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HeaderMenuicon}
          onPress={() => {
            dispatch(setOrigin("accountgroup"));
          }}
        >
          <MaterialCommunityIcons
            name="account-group"
            color={origin === "accountgroup" ? "#1877f2" : "white"}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <Divider
        orientation="horizontal"
        width={0.5}
        style={{ zIndex: 999 }}
        color="gray"
      />
    </>
  );
};

const styles = StyleSheet.create({
  HeaderMenucontainer: {
    flexDirection: "row",
    marginBottom: 15,
    width: "100%",
    justifyContent: "space-around",
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  HeaderMenuicon: {
    marginTop: 23,
  },
});

export default HeaderMenu;
