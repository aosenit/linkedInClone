import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDMnG54WGIyu6_KVTAvyeK86hCHSVTwyQY',
  authDomain: 'linkdin-app-c0ebc.firebaseapp.com',
  projectId: 'linkdin-app-c0ebc',
  storageBucket: 'linkdin-app-c0ebc.appspot.com',
  messagingSenderId: '647392736598',
  appId: '1:647392736598:web:f205aacfc998b0656b12f7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()


export { db, auth };