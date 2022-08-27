import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import MessageBody from "../components/Messaging/MessageBody";
import MessageUser from "../components/Messaging/MessageUser";
import MessaginHeader from "../components/Messaging/MessagingHeader";
import { db } from "../firebase";
const MessagingScreen = () => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setuserData(snapshot.docs.map((post) => ({ ...post.data() })));
    });
  }, []);
  return (
    <View style={{ height: "100%", backgroundColor: "#242526" }}>
      <MessaginHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MessageUser userData={userData} />
        {userData.map((user, index) => (
          <MessageBody user={user} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MessagingScreen;
