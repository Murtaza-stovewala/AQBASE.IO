import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  projectId: "aqbaseio",
  appId: "1:951946859959:web:0f0e043f394b31bf96c432",
  storageBucket: "aqbaseio.firebasestorage.app",
  apiKey: "AIzaSyAcoP9jHp5p-BXp1Lx6hUsTIy53fJAPCzs",
  authDomain: "aqbaseio.firebaseapp.com",
  messagingSenderId: "951946859959",
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
