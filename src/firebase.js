import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    "AIzaSyB9Rk-SDXq0zx7Lt84RfC-w7pYphsW2apc",

  authDomain:
    "ai-interview-platform-b8938.firebaseapp.com",

  projectId:
    "ai-interview-platform-b8938",

  storageBucket:
    "ai-interview-platform-b8938.firebasestorage.app",

  messagingSenderId:
    "653065866345",

  appId:
    "1:653065866345:web:9eb1f4621b746db535e6f8"
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const db =
  getFirestore(app);