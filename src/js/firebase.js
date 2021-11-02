
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYt46PFFCc5HIK9OxSaxnYS6BHE_xmcgc",
  authDomain: "postme-web.firebaseapp.com",
  projectId: "postme-web",
  storageBucket: "postme-web.appspot.com",
  messagingSenderId: "48680584122",
  appId: "1:48680584122:web:9fc1b4a12e2ecf64905383",
  measurementId: "G-MXSJ2QCKTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
