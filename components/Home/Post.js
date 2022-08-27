import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { firebase, db } from "../../firebase";
import FeatherIcon from "react-native-vector-icons/Feather";
import { selectUserToken } from "../slices/navSlices";
import { useSelector } from "react-redux";

const Post = ({ posts }) => {
  const userToken = useSelector(selectUserToken);
  return (
    <View>
      <PostHeader posts={posts} />
      <PostBody posts={posts} />
      <PostFooter posts={posts} />
    </View>
  );
};

const PostHeader = ({ posts }) => (
  <View style={styles.postheader}>
    <TouchableOpacity>
      <Image source={{ uri: posts.profile_picture }} style={styles.postimg} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.postcontainertext}>{posts.user}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ alignItems: "flex-end", flex: 1 }}>
      <Text
        style={{
          color: "white",
          fontSize: 35,
          marginRight: 10,
          marginTop: -13,
        }}
      >
        ...
      </Text>
    </TouchableOpacity>
  </View>
);

const PostBody = ({ posts }) => (
  <View style={{ marginBottom: 15 }}>
    <Text style={{ color: "white", fontSize: 15, padding: 13 }}>
      {posts.caption}
    </Text>
    <Image
      source={{ uri: posts.imageurl }}
      style={{ height: 300, width: "100%" }}
    />
  </View>
);

const PostFooter = ({ posts }) => {
  const handlelike = () => {
    const currentlikestatus = !posts.likes_by_users.includes(
      "imranfahim552@gmail.com"
    );
    db.collection("users")
      .doc(posts.owner_email)
      .collection("posts")
      .doc(posts.id)
      .update({
        likes_by_users: currentlikestatus
          ? firebase.firestore.FieldValue.arrayUnion("imranfahim552@gmail.com")
          : firebase.firestore.FieldValue.arrayRemove(
              "imranfahim552@gmail.com"
            ),
      })
      .then(() => {
        console.log("Document Successfully updated!");
      })
      .catch((error) => {
        console.log("Error updating document:", error);
      });
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#323436",
            width: 100,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            flexDirection: "row",
          }}
          onPress={() => handlelike(posts)}
        >
          <Image
            source={
              posts.likes_by_users.includes("imranfahim552@gmail.com")
                ? require("../../assets/activefacebook.png")
                : require("../../assets/facebook.png")
            }
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              color: "white",
              marginTop: 5,
              marginLeft: 5,
              fontSize: 17,
            }}
          >
            {posts.likes_by_users.length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#323436",
            width: 100,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
          }}
        >
          <FeatherIcon name="message-square" color="white" size={26} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#323436",
            width: 100,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
          }}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/external-outline-juicy-fish/60/ffffff/external-share-arrows-outline-outline-juicy-fish.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <Divider
        orientation="horizontal"
        color="black"
        width={8}
        style={{ marginBottom: 20 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  postimg: {
    width: 60,
    height: 60,
    borderRadius: 100,
    resizeMode: "contain",
    marginLeft: 15,
    marginTop: 10,
  },
  postheader: {
    flexDirection: "row",
  },
  postcontainertext: {
    color: "white",
    fontSize: 18,
    alignItems: "center",
    marginTop: 8,
    marginLeft: 8,
  },
});

export default Post;
