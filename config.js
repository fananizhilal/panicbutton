import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDHI1-Q_VxcYr7GQ239b6TUbTjBblUA3kQ",
  databaseURL:
    "https://panicbuttonfinal-default-rtdb.asia-southeast1.firebasedatabase.app",
  authDomain: "panicbuttonfinal.firebaseapp.com",
  projectId: "panicbuttonfinal",
  storageBucket: "panicbuttonfinal.appspot.com",
  messagingSenderId: "980246585504",
  appId: "1:980246585504:web:fd0a270557bd8d806869c5",
};
 
 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export default firestore;
