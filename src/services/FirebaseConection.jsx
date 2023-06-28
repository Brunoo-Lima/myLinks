import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBKABXZfzvO_TJ1F7QuuL1RDybV7QVutm0',
  authDomain: 'mylinks-126bd.firebaseapp.com',
  projectId: 'mylinks-126bd',
  storageBucket: 'mylinks-126bd.appspot.com',
  messagingSenderId: '274912044983',
  appId: '1:274912044983:web:46d86d6896f2b51b802a32',
  measurementId: 'G-65TWQNZ1F1',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { database, auth };
