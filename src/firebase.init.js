// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjBM7OSAkzsrA9TaQz_3Gpj4NI98EH8fs",
  authDomain: "medical-health-care-d4598.firebaseapp.com",
  projectId: "medical-health-care-d4598",
  storageBucket: "medical-health-care-d4598.appspot.com",
  messagingSenderId: "800032639052",
  appId: "1:800032639052:web:e400a8c36ad2c03a778ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;