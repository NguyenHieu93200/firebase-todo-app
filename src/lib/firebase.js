import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFwbDcLYuu5yjhx4zq07dbi-0fdr_jJEQ",
  authDomain: "fir-sample-98402.firebaseapp.com",
  projectId: "fir-sample-98402",
  storageBucket: "fir-sample-98402.appspot.com",
  messagingSenderId: "804132541397",
  appId: "1:804132541397:web:10982368510f88894da35c"
};

firebase.initializeApp(firebaseConfig);