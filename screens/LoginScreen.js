import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginFooter from "../components/Login/LoginFooter";
import LoginForm from "../components/Login/LoginForm";
const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#242526" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          color: "#b0b3b8",
          marginBottom: 10,
        }}
      >
        Esomaz
      </Text>
      <LoginForm />
      <LoginFooter />
    </SafeAreaView>
  );
};

export default LoginScreen;
