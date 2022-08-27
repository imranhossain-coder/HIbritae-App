import React  from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";

const MessageUser = ({ userData }) => {
  return (
    <>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 10, marginBottom: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#dadada",
                width: 55,
                height: 55,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Entypo name="camera" color="white" size={15} />
            </TouchableOpacity>
            <Text style={{ color: "white", width: 50, textAlign: "center" }}>
              Add to story
            </Text>
            <View
              style={{
                backgroundColor: "blue",
                width: 20,
                borderRadius: 100,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: 40,
                left: 33,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>+</Text>
            </View>
          </View>
          {userData.map((data, index) => (
            <TouchableOpacity key={index}>
              <View style={{ marginTop: 12, marginLeft: 15 }} >
                <Image
                  source={{
                    uri: data.profile_picture,
                  }}
                  style={{ width: 65, height: 65, borderRadius: 100 }}
                />
                <Text style={{ textAlign: "center", color: "white" }}>
                  {data.username}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Divider
        orientation="horizontal"
        width={3}
        style={{ zIndex: 999 }}
        color="black"
      />
    </>
  );
};

export default MessageUser;
