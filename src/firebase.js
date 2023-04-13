// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBhfwcXxZw2aZUgWHrcW58xbQ_2sXqpdHQ",
    authDomain: "linkedin-clone-4cf15.firebaseapp.com",
    projectId: "linkedin-clone-4cf15",
    storageBucket: "linkedin-clone-4cf15.appspot.com",
    messagingSenderId: "587266109017",
    appId: "1:587266109017:web:3708e73679b06a1820cb48",
    measurementId: "G-FG6E8PV0HG"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.fireStore();
  const auth=firebase.auth();
  export {db,auth};