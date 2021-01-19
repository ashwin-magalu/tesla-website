import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwxna-4ZE08WkFCA_5IUqvxTDfkEzgaDI",
  authDomain: "sociogram-world.firebaseapp.com",
  databaseURL: "https://sociogram-world.firebaseio.com",
  projectId: "sociogram-world",
  storageBucket: "sociogram-world.appspot.com",
  messagingSenderId: "598795257178",
  appId: "1:598795257178:web:a74860ba08590b5be51f63",
  measurementId: "G-DPKDJL4FT3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth };
