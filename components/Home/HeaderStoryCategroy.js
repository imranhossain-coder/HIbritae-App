import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const HeaderStoryCategroy = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 15,
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity style={styles.headerstorycontainer}>
          <Text>🙂</Text>
          <Text style={styles.HeaderStoryText}>Feeling</Text>
        </TouchableOpacity>
        <Divider width={0.5} orientation="vertical" />
        <TouchableOpacity style={styles.headerstorycontainer}>
          <Image
            source={require("../../assets/livevideo.png")}
            style={{ width: 22, resizeMode: "contain", marginRight: 8 }}
          />
          <Text style={styles.HeaderStoryText}>Live Video</Text>
        </TouchableOpacity>
        <Divider width={0.5} orientation="vertical" />
        <TouchableOpacity style={styles.headerstorycontainer}>
          <Image
            source={require("../../assets/location.png")}
            style={{ width: 30, resizeMode: "contain" }}
          />
          <Text style={styles.HeaderStoryText}>Location</Text>
        </TouchableOpacity>
      </View>
      <Divider width={9} color="black" />
    </>
  );
};

const styles = StyleSheet.create({
  HeaderStoryText: {
    color: "white",
    fontSize: 15,
  },
  headerstorycontainer: {
    flexDirection: "row",
    paddingTop: 12,
    alignItems: "center",
  },
});
export default HeaderStoryCategroy;
