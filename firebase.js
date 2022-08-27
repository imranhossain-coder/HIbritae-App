// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
require("firebase/compat/auth");
require("firebase/compat/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8d12gJJ_frhAJ2vSXsCTh8cqkhIpN4aQ",
  authDomain: "facebook-clone-fa9c1.firebaseapp.com",
  projectId: "facebook-clone-fa9c1",
  storageBucket: "facebook-clone-fa9c1.appspot.com",
  messagingSenderId: "1086090483088",
  appId: "1:1086090483088:web:b78066ba03562542f70f15",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export { firebase, db };
