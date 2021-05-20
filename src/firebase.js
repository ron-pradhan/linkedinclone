import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBkPtAG06o503I21ElbjpD_x6mwkPgYiAg",
    authDomain: "linkedin-clone-2d5cb.firebaseapp.com",
    projectId: "linkedin-clone-2d5cb",
    storageBucket: "linkedin-clone-2d5cb.appspot.com",
    messagingSenderId: "270446921544",
    appId: "1:270446921544:web:7b17ca041d4cf84a5d957d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()

  export{ db, auth }