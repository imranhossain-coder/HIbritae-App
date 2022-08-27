import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import React from "react";
import HomeScreen from "./screens/HomeScreens";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import PostScreen from "./screens/PostScreen";
import MessagingScreen from "./screens/MessagingScreen";
import ForgetPass from "./screens/ForgetPass";
import Verifypass from "./screens/Verifypass";
import ChangePass from "./screens/ChangePass";
import ChatScreen from "./screens/ChatScreen";
import SettingScreen from "./screens/SettingScreen";
const Stack = createNativeStackNavigator();

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="MessagingScreen" component={MessagingScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="Verifypass" component={Verifypass} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
    </Stack.Navigator>
  </NavigationContainer>
);
