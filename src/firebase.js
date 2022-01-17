import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmCJMbQT0tmT5Vqpvq-C_aBmu6kp7TV7w",
  authDomain: "clone-47fbe.firebaseapp.com",
  projectId: "clone-47fbe",
  storageBucket: "clone-47fbe.appspot.com",
  messagingSenderId: "297439706696",
  appId: "1:297439706696:web:6f247012a9e1256d6b627d",
  measurementId: "G-N7CLPGQM10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };