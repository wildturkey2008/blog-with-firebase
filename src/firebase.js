import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjd1mNF-FRWrowsVBN09QKxP8E9zHyVAI",
  authDomain: "blog-72afa.firebaseapp.com",
  projectId: "blog-72afa",
  storageBucket: "blog-72afa.appspot.com",
  messagingSenderId: "908038792287",
  appId: "1:908038792287:web:7569b849d997153c27e7ea",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
