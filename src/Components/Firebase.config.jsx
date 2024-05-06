// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(process.env.VITE_APIKey);
const firebaseConfig = {
    apiKey: process.env.VITE_APIKey,
    authDomain: process.env.VITE_DOMAIN,
    projectId: process.env.VITE_PROJECTID,
    storageBucket: process.env.VITE_STROAGEID,
    messagingSenderId: process.env.VITE_MESSAGEID,
    appId: process.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
export default app