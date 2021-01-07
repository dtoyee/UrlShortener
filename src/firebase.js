import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDmMMdxV3Grk7PHxOQa-7cQnYAEHFGzODA",
    authDomain: "url-shortener-44038.firebaseapp.com",
    projectId: "url-shortener-44038",
    storageBucket: "url-shortener-44038.appspot.com",
    messagingSenderId: "706212792715",
    appId: "1:706212792715:web:656dacec83e2b55282078e",
    measurementId: "G-RQZN84C513"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default db 