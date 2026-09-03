import {initializeApp} from "firebase/app";
import { getDatabase, ref, onValue  } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDAgV8ipuYNd0I1hj7M1hAGOSGR-d8qcxE",
  authDomain: "footapp-300d9.firebaseapp.com",
  databaseURL: "https://footapp-300d9-default-rtdb.firebaseio.com",
  projectId: "footapp-300d9",
  storageBucket: "footapp-300d9.firebasestorage.app",
  messagingSenderId: "360852998256",
  appId: "1:360852998256:web:45ca444a77d1a1060a8cb5",
  databaseURL: "https://footapp-300d9-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db, ref, onValue } 