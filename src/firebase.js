// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMqq74-LyzVwVsezi4quXb99pXQpBwUjM",
  authDomain: "fir-auth-61545.firebaseapp.com",
  projectId: "fir-auth-61545",
  storageBucket: "fir-auth-61545.appspot.com",
  messagingSenderId: "613408783190",
  appId: "1:613408783190:web:b98840da6648d48797b4f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, app };