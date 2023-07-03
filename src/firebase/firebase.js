import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuAI_YINB8S-SRKmT2jM0m9Gm3s_LBVcQ",
  authDomain: "buybacho.firebaseapp.com",
  databaseURL: "https://buybacho.firebaseio.com",
  projectId: "buybacho",
  storageBucket: "buybacho.appspot.com",
  messagingSenderId: "452296909349",
  appId: "1:452296909349:web:ebbb3c874d4ea3539e15cc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
