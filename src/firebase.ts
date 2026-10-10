import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkiYvYXW6yhJzSg-VzLuMTlS_hzMDL3-8",
  authDomain: "glide-inbox.firebaseapp.com",
  projectId: "glide-inbox",
  storageBucket: "glide-inbox.appspot.com",
  messagingSenderId: "262035422284",
  appId: "1:262035422284:web:57140c116764ee400c48e9",
  measurementId: "G-185GFJKT7W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
