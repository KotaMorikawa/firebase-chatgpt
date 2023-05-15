import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAlghdAFRQw6nKsNxrnDXXQKmkVfWZxfF4',
  authDomain: 'chatgpt-messanger-a6abe.firebaseapp.com',
  projectId: 'chatgpt-messanger-a6abe',
  storageBucket: 'chatgpt-messanger-a6abe.appspot.com',
  messagingSenderId: '647716782080',
  appId: '1:647716782080:web:1741e6aae28690fa7698e5',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
