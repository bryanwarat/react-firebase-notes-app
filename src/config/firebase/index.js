import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAUdGtlUnrGXz8T7Q7oTvhRk77r18JsA-w",
    authDomain: "notes-app-9b06f.firebaseapp.com",
    projectId: "notes-app-9b06f",
    storageBucket: "notes-app-9b06f.appspot.com",
    messagingSenderId: "477450701924",
    appId: "1:477450701924:web:64defa84d727458bb46371",
    measurementId: "G-EZKLNY5SL3"
  };
  
  // Initialize Firebase
  const app = firebase.default.initializeApp(firebaseConfig);

  export default firebase;