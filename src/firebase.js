import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyBHJWZXB4archpvz62HPMC31q5ezTwFTsk",
    authDomain: "treinazap-3d0f9.firebaseapp.com",
    projectId: "treinazap-3d0f9",
    storageBucket: "treinazap-3d0f9.appspot.com",
    messagingSenderId: "560800304617",
    appId: "1:560800304617:web:689b66e97e1ec017204f78",
    measurementId: "G-MEASUREMENT_ID",
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
