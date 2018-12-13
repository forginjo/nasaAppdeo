import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBcm2UFx0qmmlRmoe4_tnR-4pNrVwImefE",
    authDomain: "obukafirebase.firebaseapp.com",
    databaseURL: "https://obukafirebase.firebaseio.com",
    projectId: "obukafirebase",
    storageBucket: "obukafirebase.appspot.com",
    messagingSenderId: "992528935757"
  };
  


export default class Firebase {
    static auth;
    static init() {
        firebase.initializeApp(config);
        firebase.auth = firebase.auth();
    }
}