// import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD0_05LY4qldTCydOvNtdEMtRfniwPtqr0",
  authDomain: "food-saver-0.firebaseapp.com",
  projectId: "food-saver-0",
  storageBucket: "food-saver-0.appspot.com",
  messagingSenderId: "529976180787",
  appId: "1:529976180787:web:cdcc3bc16429b88f7ae346",
  // measurementId: "${config.measurementId}"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};