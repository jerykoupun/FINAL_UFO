// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAujoZkTcIC1dD820qbAQU3MMgpRIS9lu4',
  authDomain: 'madufo-c246d.firebaseapp.com',
  projectId: 'madufo-c246d',
  storageBucket: 'madufo-c246d.firebasestorage.app',
  messagingSenderId: '591773432212',
  appId: '1:591773432212:web:84b2b0bfad1d8b65a83781',
  databaseURL: 'https://madufo-c246d-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
