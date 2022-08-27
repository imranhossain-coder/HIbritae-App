// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
require("firebase/compat/auth");
require("firebase/compat/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
 YOur Data
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export { firebase, db };
