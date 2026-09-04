import {initializeApp} from "firebase/app";
import { getDatabase, ref, onValue  } from "firebase/database";

const apiKey = process.env.EXPO_PUBLIC_FIREBASE_API_KEY ;
const databaseURL = process.env.EXPO_PUBLIC_FIREBASE_DB_URL;
const appId = process.env.EXPO_PUBLIC_FIREBASE_APP_ID;
const firebaseConfig = {
  apiKey,
  appId: "1:360852998256:web:45ca444a77d1a1060a8cb5",
  databaseURL: "https://footapp-300d9-default-rtdb.firebaseio.com",
  authDomain: "footapp-300d9.firebaseapp.com",
  projectId: "footapp-300d9",
  storageBucket: "footapp-300d9.firebasestorage.app",
  messagingSenderId: "360852998256",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db, ref, onValue } 