import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCgTfD_-k5_WJrNSAo9fM5mcjGD5sPmWeA',
  authDomain: 'linkedin-copy-9455f.firebaseapp.com',
  projectId: 'linkedin-copy-9455f',
  storageBucket: 'linkedin-copy-9455f.appspot.com',
  messagingSenderId: '1096133156517',
  appId: '1:1096133156517:web:d02843a4cd79ce4cddb74c',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }
