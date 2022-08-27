import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import { selectUserToken } from "../slices/navSlices";
const UploadStory = () => {
  const usertoken = useSelector(selectUserToken);
  const navigation = useNavigation();
  const [userProfile, setuserProfile] = useState();
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
  });
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 15,
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <View>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  userProfile === undefined
                    ? null
                    : userProfile.profile_picture,
              }}
              style={{
                width: 40,
                height: 40,
                resizeMode: "contain",
                borderRadius: 100,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 100,
            padding: 10,
            backgroundColor: "#323436",
            width: 225,
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Whats on your mind?"
            placeholderTextColor="white"
            style={{ fontSize: 18, paddingLeft: 10 }}
          />
        </View>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("PostScreen")}
        >
          <Image
            source={require("../../assets/photostory.png")}
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
              marginTop: 10,
            }}
          />
          <Text style={{ color: "white", marginLeft: 10 }}>Photo</Text>
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

export default UploadStory;
