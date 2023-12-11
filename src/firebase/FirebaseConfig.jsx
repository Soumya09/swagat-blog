// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkMj8gRI2c_dJXV1uzxcyHLqPq0EiZWrs",
  authDomain: "soumyablog-74d5d.firebaseapp.com",
  projectId: "soumyablog-74d5d",
  storageBucket: "soumyablog-74d5d.appspot.com",
  messagingSenderId: "531962085623",
  appId: "1:531962085623:web:7f0766eb89bae28fe253f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
