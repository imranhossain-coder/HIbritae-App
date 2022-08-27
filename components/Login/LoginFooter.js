import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable } from "react-native";

const LoginFooter = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "white", fontSize: 20 }}>or</Text>
      <Pressable
        style={{
          backgroundColor: "#2d88ff",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 45,
          marginTop: 10,
          width: 200,
        }}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Create new accont</Text>
      </Pressable>
    </View>
  );
};

export default LoginFooter;
