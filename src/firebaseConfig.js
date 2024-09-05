// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "SAMPLE",
  authDomain: "SAMPLE",
  projectId: "SAMPLE",
  storageBucket: "SAMPLE",
  messagingSenderId: "SAMPLE",
  appId: "SAMPLE",
  measurementId: "SAMPLE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
