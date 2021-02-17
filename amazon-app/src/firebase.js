import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
  // didn't write firebase config for security purposes
});

// const db = fireBaseApp.firestore();
const auth = firebase.auth();

export { auth };
