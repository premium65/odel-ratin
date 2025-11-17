
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEsQ2uD03nWPjC0_rIyxxTSF0tfpQjzx0",
  authDomain: "premium-work.firebaseapp.com",
  projectId: "premium-work",
  storageBucket: "premium-work.appspot.com",
  messagingSenderId: "30328208601",
  appId: "1:30328208601:web:48cb0952137b132145d2c8",
  measurementId: "G-JEE6G2XCPQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "login.html";
  }
});
