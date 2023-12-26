import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXvNOsB8qgdzAiwqnTo4T7BVu-W1WqOiU",
  authDomain: "coderhouse-react-aae64.firebaseapp.com",
  projectId: "coderhouse-react-aae64",
  storageBucket: "coderhouse-react-aae64.appspot.com",
  messagingSenderId: "30438306435",
  appId: "1:30438306435:web:29aeb3a3de0e3e134ea1b6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)