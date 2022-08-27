import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Formik } from "formik";
import * as Yup from "yup";
import { firebase, db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import ToastManager, { Toast } from "toastify-react-native";
import ProgressBar from "react-native-animated-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setloginstatus } from "../slices/navSlices";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [hidpass, sethidpass] = useState(false);
  const navigation = useNavigation();
  const LoginFromSchema = Yup.object().shape({
    emailphone: Yup.string().required("An Email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your Password has to have at least 6 Characters"),
  });
  const onlogin = async (emailphone, password) => {
    setProgress(30);
    try {
      setProgress(99);
      const userAuth = await firebase
        .auth()
        .signInWithEmailAndPassword(emailphone, password);

      await AsyncStorage.setItem("userData", JSON.stringify(userAuth));
      dispatch(setloginstatus(true));
      console.log("successfully login");
    } catch (error) {
      console.log(error.message);
      setProgress(0);
      Toast.error("Invalid Credientials");
    }
  };

  return (
    <>
      <ProgressBar progress={progress} height={1.5} backgroundColor="#4a0072" />

      <ToastManager height={50} duration={1000} />
      <View style={{ marginTop: 10 }}>
        <Formik
          initialValues={{ emailphone: "", password: "" }}
          onSubmit={(values) => {
            onlogin(values.emailphone, values.password);
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
                {
                  <Text
                    style={{ fontSize: 17, color: "#fff", fontWeight: "700" }}
                  >
                    Log in
                  </Text>
                }
              </Pressable>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgetPass")}
              >
                <Text
                  style={{
                    color: "#4599ff",
                    marginTop: 15,
                    fontSize: 15,
                    backfaceVisibility: "visible",
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default LoginForm;
