import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
const MessageBody = ({ user }) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 10,
          paddingLeft: 10,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => {
            navigation.navigate("ChatScreen");
          }}
        >
          <Image
            source={{
              uri: user.profile_picture,
            }}
            style={{
              width: 65,
              height: 65,
              borderRadius: 100,
              borderColor: "gray",
              borderWidth: 1.5,
            }}
          />

          <Text style={{ color: "white", marginLeft: 7, fontSize: 15 }}>
            {user.username}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MessageBody;
