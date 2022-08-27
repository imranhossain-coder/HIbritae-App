import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";

const PostHeader = ({navigation}) => {
  return (
    <View style={{flexDirection:"row", alignItems:"center"}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://img.icons8.com/material-rounded/24/ffffff/left.png",
          }}
          style={{ width: 35, height: 35, marginLeft: 10 }}
        />
      </TouchableOpacity>
      <Text style={{color:"white", marginLeft:15, fontSize:19, fontWeight:"bold"}}>Create post</Text>
    </View>
  );
};

export default PostHeader;
