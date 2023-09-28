// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRA56xI66iupHAgD73gXeEc1PQ_vOAbfc",
  authDomain: "user-email-password-auth-ed69d.firebaseapp.com",
  projectId: "user-email-password-auth-ed69d",
  storageBucket: "user-email-password-auth-ed69d.appspot.com",
  messagingSenderId: "320059546129",
  appId: "1:320059546129:web:0c7abbfa426e36a7b62fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;