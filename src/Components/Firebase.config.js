// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_4PEYYjtuokHBE1kY3ak1GLKN3x2f7Xc",
    authDomain: "car-doctor-93bf1.firebaseapp.com",
    projectId: "car-doctor-93bf1",
    storageBucket: "car-doctor-93bf1.appspot.com",
    messagingSenderId: "516762193068",
    appId: "1:516762193068:web:1885f68a481a5a51fea309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app