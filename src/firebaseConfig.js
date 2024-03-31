// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCajjTAgVRjCKgE8LUVDt3YDqAx6c8ELO0",
    authDomain: "kgoweb-fc7a1.firebaseapp.com",
    projectId: "kgoweb-fc7a1",
    storageBucket: "kgoweb-fc7a1.appspot.com",
    messagingSenderId: "223508566394",
    appId: "1:223508566394:web:d25724c6c0ec6412e5c6c3",
    measurementId: "G-YJRCJL5FRG"
};

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt : "select_account "
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
