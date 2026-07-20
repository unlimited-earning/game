// Memory Match Club Pro - Central Firebase Initialization
const firebaseConfig = {
  apiKey: "AIzaSyBFKWIm1kUaP47rsHtEEP05G66-SSRsvwA",
  authDomain: "gamil-sever.firebaseapp.com",
  databaseURL: "https://gamil-sever-default-rtdb.firebaseio.com",
  projectId: "gamil-sever",
  storageBucket: "gamil-sever.firebasestorage.app",
  messagingSenderId: "895391304528",
  appId: "1:895391304528:web:4b86c59ce3163607beba55"
};

// Initialize Firebase App
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Global Reference Variables
const auth = firebase.auth();
const db = firebase.database();
