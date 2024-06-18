import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBN522rTET_vOx5tCrxIblVOpKx6gWNNiA",
  authDomain: "hospital-7a04a.firebaseapp.com",
  projectId: "hospital-7a04a",
  storageBucket: "hospital-7a04a.appspot.com",
  messagingSenderId: "161667041081",
  appId: "1:161667041081:web:c4b9d5b5ea27e29b760ae8",
  measurementId: "G-PR38TWQX8R"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };
