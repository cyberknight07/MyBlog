import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgK4TPwZGcgedV5RcMJGV073KDbVWOsik",
  authDomain: "jom-teroka-blog.firebaseapp.com",
  projectId: "jom-teroka-blog",
  storageBucket: "jom-teroka-blog.firebasestorage.app",
  messagingSenderId: "221655294915",
  appId: "1:221655294915:web:010aa27d8bf5855acb1376",
  measurementId: "G-TCYPPV7W5K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;
  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((err) => {
      console.log(err);
    });
  return user;
};
