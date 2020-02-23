import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyA1eqIlm9jOwJL_DAu00z1nS-4aBLZ9p4M",
  authDomain: "heyyydok.firebaseapp.com",
  databaseURL: "4OlXMqJy8Zbbh8D446inwZMakN0nRZXdVgQOW1T4",
  projectId: "heyyydok",
  storageBucket: "heyyydok.appspot.com",
  messagingSenderId: "202071480113"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;