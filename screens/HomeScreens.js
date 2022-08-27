import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";
import Header from "../components/Home/Header";
import HeaderStoryCategroy from "../components/Home/HeaderStoryCategroy";
import Post from "../components/Home/Post";
import Story from "../components/Home/Story";
import UploadStory from "../components/Home/UploadStory";
import { setUser } from "../components/slices/navSlices";
import { db } from "../firebase";

const HomeScreens = ({ navigation }) => {
  const dispatch = useDispatch();
  const [posts, setposts] = useState([]);
  const [UserToken, setUserToken] = useState(null);

  const savedata = () => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setposts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      });
  };
  useEffect(async () => {
    savedata();
    const usertoken = await AsyncStorage.getItem("userData");
    const parsedata = JSON.parse(usertoken);
    setUserToken(parsedata.user.uid);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#242526" }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UploadStory navigation={navigation} />
        <HeaderStoryCategroy />
        <Story />
        {posts.map((post, index) => (
          <Post posts={post} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreens;
