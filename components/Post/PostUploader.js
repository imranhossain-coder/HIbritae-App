import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Button, Alert } from "react-native";
const PLACEHOLDER_IMG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEXh5urDzdbZ3+TT19vW2t7M0tfAytPd5OnT2d/CzNPO2dvg5enk6ezBytLY3uTT2t/W4OLM1d7I09W/ys/G0NfN2N3c5efN0dXCzs/S3eDJ1dbQ2eL4S0liAAACs0lEQVR4nO3c4XqaMBhAYYISjASUYq1293+fQ1AbSBhdp+DHzvtvsfB4BsMQ6aIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDpZUX8PEU2d14t1up59GruvFr8xEClKJwChRRSOD8KKaRwfm5hEq8fYKdft3BnH7HH9IULNw/ZI4VTo3BMFtnIdv79Lq3Qxh9vb6u1M7KsQns27aa6vI8tq7CsbttqlV7HllRoN+4ij7kuOy2pcF85Gyt9aC84Syo8qA6zb0YFFhZxeDzrLUSa92ZYYKGqjsHxtbfU2gyLK7QrpQ7BFz5NL1A349IKbZrX518o8ZK+hGNok8sbDi7Pe2dp+/cgrXDfnop657/kXWm2zbCwQnt/+2nkfZHUO4SmndUIK3SWJPwXi7wTmEj8xHff7cl71SZu4enob/Pyhd2ExF/G+bjXmNNtXiCp0MadT7x84yXajakuQZVJ7rMCSYX9iWfuT9/s8VwqVZ6zr3hJhdu8W6h08Hv57iKGoEKb9WdltXRgNw5BhYnXV98Dju9RTmERekpDl6Pr4mIKbeAcvSSex/YopbD+HAgWqioePIrtB4aUwv60+osZeNDJxu2sR0ih/RwKHLraZKWWdAfcm830EgNXGxvnWlRh9IdAFZqi7y6TA0mFv0ae5yu6RzFTzc8LKgzNZjqMu/pmbzeRggrLkUBlnAtqmtymr3IKv/PM6cf1PLXOKoCYwuNpPPB+P3xweqQUDs5mupr74b1xf1ZKYda/KxxKjO1758snMYXbbx3CNqn3x2b7RRX2g5vtKZwahRRSOD8KKaRwfn6h94jF4gqP6Y81279+4b+icGr/V2HgmZkfeOnCxf9GyeNROAUKKaRwfhRSSOH8lv//02TJM60fMtMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODv/AaWZyr86EvqgAAAAABJRU5ErkJggg==";
import Validurl from "valid-url";
import * as Yup from "yup";
import { Formik } from "formik";
import { firebase, db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "react-native-animated-progress";
const uploadPostSchema = Yup.object({
  imageurl: Yup.string().url().required("A Url is Required"),
  caption: Yup.string().max(2200, "Caption has reached the maximum Charecter"),
});
const PostUploader = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const [thumbnailurl, setthumbnailurl] = useState();
  const [currentLoggeduser, setcurrentLoggeduser] = useState();

  useEffect(() => {
    const getUserName = () => {
      const user = firebase.auth().currentUser;
      const unsubscribe = db
        .collection("users")
        .where("owner_uid", "==", user.uid)
        .limit(1)
        .onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            setcurrentLoggeduser({
              username: doc.data().username,
              profilePicture: doc.data().profile_picture,
            });
          });
        });
      return unsubscribe;
    };
    getUserName();
  }, []);

  const uploadPosttoFirebase = async (caption, imageurl) => {
    setProgress(50);
    const unsubscribe = await db
      .collection("users")
      .doc(firebase.auth().currentUser.email)
      .collection("posts")
      .add({
        imageurl: imageurl,
        user: currentLoggeduser.username,
        profile_picture: currentLoggeduser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        owner_email: firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users: [],
        comment: [],
      });

    setProgress(80);
    navigation.goBack();

    return unsubscribe;
  };
  return (
    <>
      <Formik
        initialValues={{ caption: "", imageurl: "" }}
        onSubmit={(values) => {
          uploadPosttoFirebase(values.caption, values.imageurl);
        }}
        validationSchema={uploadPostSchema}
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
            <View>
              <TextInput
                style={{
                  backgroundColor: "#46484a",
                  paddingBottom: 70,
                  marginTop: 25,
                  fontSize: 19,
                  color: "white",
                }}
                placeholder="Whats on your mind?"
                placeholderTextColor="white"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
              <Image
                source={{
                  uri: Validurl.isUri(thumbnailurl)
                    ? thumbnailurl
                    : PLACEHOLDER_IMG,
                }}
                style={{ width: 100, height: 100, marginTop: 5 }}
              />
              <TextInput
                placeholder="Image Url"
                style={{
                  backgroundColor: "#46484a",
                  paddingBottom: 15,
                  alignItems: "center",
                  marginBottom: 30,
                  color: "white",
                }}
                placeholderTextColor="white"
                onChangeText={handleChange("imageurl")}
                onBlur={handleBlur("imageurl")}
                value={values.imageurl}
                onChange={(e) => setthumbnailurl(e.nativeEvent.text)}
              />
            </View>
            <ProgressBar
              progress={progress}
              height={1.5}
              backgroundColor="#4a0072"
            />
            <Button title="Post" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </>
  );
};

export default PostUploader;
