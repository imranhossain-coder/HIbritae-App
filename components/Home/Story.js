import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import { selectUserToken } from "../slices/navSlices";

const Story = () => {
  const usertoken = useSelector(selectUserToken);
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
  // console.log(userProfile)kl;
  return (
    <>
      <View style={{ flexDirection: "row", marginBottom: 7 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.storycontainer}>
            <TouchableOpacity style={styles.storyimgcontainer}>
              <Image
                source={{
                  uri:
                    userProfile === undefined
                      ? null
                      : userProfile.profile_picture,
                }}
                style={styles.storyimg}
              />
              <Text style={styles.storytext}>
                {userProfile === undefined ? null : userProfile.username}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Divider
        width={8}
        orientation="horizontal"
        color="black"
        style={{ marginBottom: -1 }}
      />
      <Divider
        width={0.5}
        orientation="horizontal"
        style={{ marginTop: 5, zIndex: 999 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  storycontainer: {
    marginRight: 5,
    marginBottom: 0,
  },
  storyimg: {
    height: 140,
    width: 90,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 15,
    opacity: 0.7,
  },
  storytext: {
    position: "absolute",
    color: "white",
    bottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    left: 20,
  },
});

export default Story;
