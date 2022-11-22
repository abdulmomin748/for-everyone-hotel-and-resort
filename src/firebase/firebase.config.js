// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaDPhTeZLBfTE89MU-rTsnKE8Dfgof8QU",
  authDomain: "for-everyone-hotel-and-resort.firebaseapp.com",
  projectId: "for-everyone-hotel-and-resort",
  storageBucket: "for-everyone-hotel-and-resort.appspot.com",
  messagingSenderId: "1030825649377",
  appId: "1:1030825649377:web:c33346a072496ad8f703a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;