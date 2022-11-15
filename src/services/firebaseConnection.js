import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0QQtFeheaGdvqQlAQbhzc-SZAOOi7Ds8",
  authDomain: "devlinks-10091.firebaseapp.com",
  projectId: "devlinks-10091",
  storageBucket: "devlinks-10091.appspot.com",
  messagingSenderId: "49968773451",
  appId: "1:49968773451:web:1ea9e0519ed3f58e3b90ce",
  measurementId: "G-DGMWXQ5C92"
};


const firebaseApp = initializeApp(firebaseConfig)
const database = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { database, auth }
