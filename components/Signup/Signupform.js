import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { firebase, db } from "../../firebase";
import Entypo from "react-native-vector-icons/Entypo";
import ProgressBar from "react-native-animated-progress";
const Signupform = () => {
  const [progress, setProgress] = useState(0);
  const LoginFromSchema = Yup.object().shape({
    emailphone: Yup.string().required("An Email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your Password has to have at least 6 Characters"),
    username: Yup.string().required("username is required"),
  });
  const onSignup = async (emailphone, password, username) => {
    setProgress(30);
    try {
      setProgress(99);
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(emailphone, password, username);

      db.collection("users")
        .doc(authUser.user.email)
        .set({
          owner_uid: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          profile_picture: await getRandomProfilepicture(),
          activestatus: "login",
        });
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  const getRandomProfilepicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };
  const [hidpass, sethidpass] = useState(true);
  return (
    <>
      <ProgressBar progress={progress} height={1.5} backgroundColor="#4a0072" />

      <View style={{ marginTop: 10 }}>
        <Formik
          initialValues={{ emailphone: "", password: "", username: "" }}
          onSubmit={(values) => {
            onSignup(values.emailphone, values.password, values.username);
            console.log(values.emailphone, values.password, values.username);
          }}
          validationSchema={LoginFromSchema}
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
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
                  Mobile number or email
                </Text>
                <TextInput
                  placeholderTextColor="white"
                  style={{
                    backgroundColor: "#323436",
                    padding: 5,
                    color: "white",
                    borderColor: "#badaff",
                    borderWidth: 2,
                    fontSize: 15,
                    paddingLeft: 15,
                  }}
                  autoCapitalize="none"
                  onChangeText={handleChange("emailphone")}
                  onBlur={handleBlur("emailphone")}
                  value={values.emailphone}
                />
                <Text style={{ color: "red" }}>{errors.emailphone}</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
                  Username
                </Text>
                <TextInput
                  placeholderTextColor="white"
                  style={{
                    backgroundColor: "#323436",
                    padding: 5,
                    color: "white",
                    borderColor: "#badaff",
                    borderWidth: 2,
                    fontSize: 15,
                    paddingLeft: 15,
                  }}
                  autoCapitalize="none"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
                <Text style={{ color: "red" }}>{errors.username}</Text>
              </View>
              <View>
                <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
                  Password
                </Text>
                <TextInput
                  placeholderTextColor="white"
                  style={{
                    backgroundColor: "#323436",
                    padding: 5,
                    color: "white",
                    borderColor: "#badaff",
                    borderWidth: 2,
                    fontSize: 15,
                    paddingLeft: 15,
                  }}
                  autoCapitalize="none"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidpass}
                />
                <Text style={{ color: "red" }}>{errors.password}</Text>
                <View
                  style={{
                    position: "relative",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity onPress={() => sethidpass(!hidpass)}>
                    {!hidpass ? (
                      <Entypo
                        name="eye"
                        size={30}
                        color="white"
                        style={{ right: 15 }}
                      />
                    ) : (
                      <Entypo
                        name="eye-with-line"
                        color="white"
                        size={30}
                        style={{ right: 15 }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <Pressable
                style={{
                  backgroundColor: "#2d88ff",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 40,
                  marginTop: 10,
                }}
                onPress={handleSubmit}
              >
                <Text
                  style={{ fontSize: 17, color: "#fff", fontWeight: "700" }}
                >
                  Signup
                </Text>
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default Signupform;
