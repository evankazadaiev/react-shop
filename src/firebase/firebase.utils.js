import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCRXoZR9Xiz_U11XZWd8LRN6w_aKvAUOD8",
  authDomain: "react-shop-2c3bb.firebaseapp.com",
  databaseURL: "https://react-shop-2c3bb.firebaseio.com",
  projectId: "react-shop-2c3bb",
  storageBucket: "react-shop-2c3bb.appspot.com",
  messagingSenderId: "264910355204",
  appId: "1:264910355204:web:bb210123be85afcf0a2e51",
  measurementId: "G-FE12CXFL4K"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
