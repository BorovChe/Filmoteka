import { initializeApp, FirebaseApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBeo972DqKzHFt772xsFAqi8js34gyYVgc',
  authDomain: 'filmoteka-aa9b3.firebaseapp.com',
  projectId: 'filmoteka-aa9b3',
  storageBucket: 'filmoteka-aa9b3.appspot.com',
  messagingSenderId: '355867279763',
  appId: '1:355867279763:web:335ad7a0a822d3daffa866',
};

const app: FirebaseApp = initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);
const database: Firestore = getFirestore(app);

export { auth, database };
