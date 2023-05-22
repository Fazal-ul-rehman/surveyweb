import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



firebase.initializeApp({
  apiKey: "AIzaSyB0ubhxwxst6Xmqv18zeaW0rp0IK4ZbC6g",
  authDomain: "surveyweb-ca980.firebaseapp.com",
  projectId: "surveyweb-ca980",
  storageBucket: "surveyweb-ca980.appspot.com",
  messagingSenderId: "530450345507",
  appId: "1:530450345507:web:0bd4fff5e3b91e48c84b96",
  measurementId: "G-NGE5G234W9"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
