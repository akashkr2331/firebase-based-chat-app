// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKvZF8DVfmmh35RXFSPGnwlA1yxZqJgRg",
  authDomain: "chat-app-a7382.firebaseapp.com",
  projectId: "chat-app-a7382",
  storageBucket: "chat-app-a7382.appspot.com",
  messagingSenderId: "409599969823",
  appId: "1:409599969823:web:15cd17396e832a1585232a",
  measurementId: "G-EYRXHD0ZNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }