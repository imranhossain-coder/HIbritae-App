import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import {firebase} from "../firebase"

const ChangePass = () => {
        const navigation = useNavigation();
        const ChangePass = Yup.object().shape({
          Password: Yup.string().required("Password is required"),
          ConfirmPassword: Yup.string().required("Confirm Password Required"),
        });
      
        const connect = async (email) => {

            firebase
        
        };
  return (
    <Formik
      initialValues={{ Password: "", ConfirmPassword:"" }}
      onSubmit={(values) => {
        // connect(values.Email);
      }}
      validationSchema={ChangePass}
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
          <View style={{ height: "100%", backgroundColor: "black" }}>
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
                 Reset Password
                </Text>
              </View>
              <TextInput
                placeholder="New Password"
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
                onChangeText={handleChange("Password")}
                onBlur={handleBlur("Password")}
                value={values.Password}
              />
              <TextInput
                placeholder="Confirm Password"
                style={{
                  backgroundColor: "gray",
                  height: 50,
                  width: 250,
                  borderRadius: 5,
                  marginTop:30,
                  paddingLeft: 10,
                  color: "white",
                }}
                autoComplete="off"
                autoCapitalize="none"
                placeholderTextColor="white"
                onChangeText={handleChange("ConfirmPassword")}
                onBlur={handleBlur("ConfirmPassword")}
                value={values.ConfirmPassword}
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

export default ChangePass;
