import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6ZtMHI1odY_0wNEI6sOHEHAfM_NC4cGc",
    authDomain: "twitter-clone-ab90c.firebaseapp.com",
    projectId: "twitter-clone-ab90c",
    storageBucket: "twitter-clone-ab90c.appspot.com",
    messagingSenderId: "742913092256",
    appId: "1:742913092256:web:b2a666f9bf6f4412dc37c5",
    measurementId: "G-16WS97YEPW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;