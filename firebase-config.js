
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYgKPSgLEJXAGZxnGjyJLemwxUmpXTsfs",
  authDomain: "online-quiz-application-c83bb.firebaseapp.com",
  projectId: "online-quiz-application-c83bb",
  storageBucket: "online-quiz-application-c83bb.appspot.com",
  messagingSenderId: "1024665518060",
  appId: "1:1024665518060:web:c3c2d1c1775e01af274ac9",
  measurementId: "G-E0MV4RSJMG"
};



export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)