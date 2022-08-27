import React, { useEffect, useState } from "react";
import { SignedInStack, SignedOutStack } from "./navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  selectloginstatus,
  setloginstatus,
  setUserToken,
} from "./components/slices/navSlices";
import { useDispatch, useSelector } from "react-redux";
const AuthNavigation = () => {
  const [currentUser, setcurrentUser] = useState(null);
  const loginstatus = useSelector(selectloginstatus);

  const dispatch = useDispatch();
  useEffect(async () => {
    const usertoken = await AsyncStorage.getItem("userData");
    const parsedata = JSON.parse(usertoken);

    if (loginstatus === null) {
      setcurrentUser(usertoken);
      dispatch(setUserToken(parsedata));
    } else {
      if (loginstatus === false) {
        setcurrentUser(false);
      } else {
        setcurrentUser(true);
        dispatch(setUserToken(parsedata));
      }
    }
  });
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};
export default AuthNavigation;
