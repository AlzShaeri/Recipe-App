// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl3uXr6wuKM59u59dNrGMg7C6sf4R1o5Y",
  authDomain: "recipe-app-53bdd.firebaseapp.com",
  projectId: "recipe-app-53bdd",
  storageBucket: "recipe-app-53bdd.appspot.com",
  messagingSenderId: "442989971442",
  appId: "1:442989971442:web:9a8f8d0e5b20da9f4e8d6b",
  measurementId: "G-0KQS33769L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
