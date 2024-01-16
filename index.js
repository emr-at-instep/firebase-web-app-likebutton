// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required

import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import {
  getFirestore,
  addDoc,
  collection
} from 'firebase/firestore';

// Document elements
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');

const likeContainer = document.getElementById('like-dislike');
const feedbackContainer = document.getElementById('message-submission');
const thankyouContainer = document.getElementById('thankyou-message');

var message = document.getElementById('message');
const submitButton = document.getElementById('submit');

let db;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: "AIzaSyAuQVLwJdBiRrCqY3GZkx-qVJxHyfPgLoU",
    authDomain: "likebutton-a159c.firebaseapp.com",
    projectId: "likebutton-a159c",
    storageBucket: "likebutton-a159c.appspot.com",
    messagingSenderId: "834805696834",
    appId: "1:834805696834:web:12d20c80bf9886b96a60db"
  };

  // Initialize Firebase
  await initializeApp(firebaseConfig);
  
  db = getFirestore();

  // FirebaseUI config
  const uiConfig = {};

  likeButton.addEventListener('click', () => {
    likeContainer.style.display = 'none';
  });

  // likeButton, dislikeButton
  likeButton.addEventListener('click', () => {
    addDoc(collection(db, "ratings"), {
      text: "LIKE",
      timestamp: Date.now()
    });

    likeContainer.style.display = 'none';
    feedbackContainer.style.display = 'none';
    thankyouContainer.style.display = 'block';
  });

  dislikeButton.addEventListener('click', () => {
    likeContainer.style.display = 'none';
    feedbackContainer.style.display = 'block';
    thankyouContainer.style.display = 'none';
  });

  // submitButton
  submitButton.addEventListener('click', () => {
    likeContainer.style.display = 'none';
    feedbackContainer.style.display = 'none';
    thankyouContainer.style.display = 'block';

    addDoc(collection(db, 'ratings'), {
      text: message.value,
      timestamp: Date.now(),
      url: document.referrer
    })
  })

}
main();