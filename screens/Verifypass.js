import React from "react";
import { Pressable, TextInput } from "react-native";
import { Alert, TouchableOpacity, Button } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const Verifypass = () => {
  const navigation = useNavigation();
  const ForgetPassword = Yup.object().shape({
    Code: Yup.string().required("An Email is required"),
  });

  const Verifycode = async (veriycode) => {
    const response = await fetch("http://10.0.0.102:8000/verifycode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ veriycode }),
    });
    if (response.status == 200) {
      navigation.navigate("ChangePass");
    } else {
      Alert.alert("Wrong Verify Code");
    }
  };
  return (
    <Formik
      initialValues={{ Code: "" }}
      onSubmit={(values) => {
        Verifycode(values.Code);
      }}
      validationSchema={ForgetPassword}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View style={{ height: "100%", backgroundColor: "#242526" }}>
            <Feather
              name="arrow-left"
              size={40}
              color="white"
              style={{ marginTop: 45, marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
            <SafeAreaView style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#3366cc",
                  borderRadius: 80,
                  alignItems: "center",
                  width: 300,
                  padding: 10,
                  marginTop: 90,
                }}
              >
                <Text style={{ fontSize: 18 }}>
                  Enter the Verificition code that we send your Email
                </Text>
              </View>
              <TextInput
                placeholder="Enter code"
                style={{
                  backgroundColor: "gray",
                  height: 50,
                  width: 250,
                  borderRadius: 5,
                  marginTop: 50,
                  paddingLeft: 10,
                  color: "white",
                }}
                autoComplete="off"
                autoCapitalize="none"
                placeholderTextColor="white"
                onChangeText={handleChange("Code")}
                onBlur={handleBlur("Code")}
                value={values.Code}
              />
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 45,
                  marginTop: 10,
                  width: 200,
                  backgroundColor: "#66ff33",
                  marginTop: 30,
                  borderRadius: 5,
                }}
                onPress={handleSubmit}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Submit</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </>
      )}
    </Formik>
  );
};

export default Verifypass;
