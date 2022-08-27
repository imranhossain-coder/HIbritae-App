import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo'

const Chat = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView style={{ height: "100%", backgroundColor: "#242526" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-rounded/24/ffffff/left.png",
            }}
            style={{ width: 35, height: 35, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <TouchableOpacity>
        <Entypo name="camera" size={20} color="red"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="camera" size={20} color="red"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="camera" size={20} color="red"/>
      </TouchableOpacity>
    </View>
  );
};

export default Chat;
