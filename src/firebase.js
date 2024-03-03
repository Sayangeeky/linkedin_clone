import firebase from 'firebase/compat/app'; // Use 'compat' for Firebase v8
import 'firebase/compat/auth'; // Import auth separately
import 'firebase/compat/firestore'; // Import firestore separately


const firebaseConfig = {
    apiKey: "AIzaSyCrAmups_qOBUqlf7nCGAc6cPI2xS5uigg",
    authDomain: "linkedin-clone-1e1a4.firebaseapp.com",
    projectId: "linkedin-clone-1e1a4",
    storageBucket: "linkedin-clone-1e1a4.appspot.com",
    messagingSenderId: "995355542758",
    appId: "1:995355542758:web:35243f6d84904248b4a727",
    measurementId: "G-VRPTGEBTPC" // Optional
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db, firebase };
