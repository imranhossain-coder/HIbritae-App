import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import Fontawesome from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo"
import Fontawesome5 from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {
  selectOrigin,
  selectnavState,
} from "../../components/slices/navSlices";
import { setOrigin } from "../../components/slices/navSlices";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const MessaginHeader = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  return (
    <>
      <SafeAreaView>
      <View style={styles.HeaderMenucontainer}>
        <TouchableOpacity
          style={styles.HeaderMenuicon}
          onPress={() => {dispatch(setOrigin("home"))
          navigation.navigate("HomeScreen")}}
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
      <Divider orientation="horizontal" width={0.5} style={{ zIndex: 999,}} color="gray" />
      </SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
        <View>
          <Text
            style={{
              fontSize: 24,
              color: "white",
              fontWeight: "bold",
              marginLeft: 15,
              marginTop:8
            }}
          >
            Messages
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginRight: 4,
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.headericon}>
            <Icon name="settings-sharp" color="white" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headericon}>
            <Fontawesome5 name="search" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  HeaderMenucontainer: {
    flexDirection: "row",
    marginBottom: 15,
    width:'100%',
    justifyContent:"space-around"
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  HeaderMenuicon: {
    marginTop: 23,
  },
  headericon: {
    marginTop:5,
    backgroundColor: "#3a3b3c",
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight:10
  },
});

export default MessaginHeader;
