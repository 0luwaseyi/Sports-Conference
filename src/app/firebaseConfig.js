
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyARY5koxYSahVKJndylLWCOUY4VOhFI84Y",
  authDomain: "sportsapp-cf387.firebaseapp.com",
  projectId: "sportsapp-cf387",
  storageBucket: "sportsapp-cf387.appspot.com",
  messagingSenderId: "314213682268",
  appId: "1:314213682268:web:0c04285efa908f32136a99",
  measurementId: "G-ESF6LX7RMF"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};