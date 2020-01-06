import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCyIf8urtGwO458CLVv2IQyZ3BDDLEi9nE",
  authDomain: "react-simple-ecommerce-shop.firebaseapp.com",
  databaseURL: "https://react-simple-ecommerce-shop.firebaseio.com",
  projectId: "react-simple-ecommerce-shop",
  storageBucket: "react-simple-ecommerce-shop.appspot.com",
  messagingSenderId: "987122608935",
  appId: "1:987122608935:web:997bb4606007df93ccd702"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
