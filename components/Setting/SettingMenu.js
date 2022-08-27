import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken, setloginstatus } from "../slices/navSlices";
import { db, firebase } from "../../firebase";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SettingMenu = () => {
  const usertoken = useSelector(selectUserToken);
  const [userProfile, setuserProfile] = useState();
  const dispatch = useDispatch();
  const userData = async () => {
    await db
      .collection("users")
      .where("owner_uid", "==", usertoken === null ? null : usertoken.user.uid)
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setuserProfile(doc.data());
        });
      });
  };
  useEffect(async () => {
    userData();
  }, []);
  const handleSignout = async () => {
    try {
      dispatch(setloginstatus(false));
      await AsyncStorage.removeItem("userData");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View
        style={{
          marginLeft: 15,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: userProfile === undefined ? null : userProfile.profile_picture,
          }}
          style={{ width: 55, height: 55, borderRadius: 100 }}
        />
        <Text style={{ color: "white", marginLeft: 10, fontSize: 15 }}>
          {userProfile === undefined ? null : userProfile.username}
        </Text>
      </View>
      <TouchableOpacity onPress={handleSignout}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginTop: 10,
            marginLeft: 15,
            backgroundColor: "green",
            width: 60,
            height: 25,
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingMenu;
