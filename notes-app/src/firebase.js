import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIdWvcBnj3ILErRlITUE5Jsk92PjepJDU",
  authDomain: "react-notes-f54e3.firebaseapp.com",
  projectId: "react-notes-f54e3",
  storageBucket: "react-notes-f54e3.appspot.com",
  messagingSenderId: "87837441915",
  appId: "1:87837441915:web:c276c6aeed96977a0787de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")
export { notesCollection , db};