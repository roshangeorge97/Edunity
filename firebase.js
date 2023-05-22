/ Import the necessary Firebase modules
import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase (Make sure you have already set up your Firebase project)
const firebaseConfig = {
  // Your Firebase config object goes here
};
firebase.initializeApp(firebaseConfig);

// Get the Firebase auth instance
const auth = firebase.auth();

// Create a Google authentication provider
const provider = new firebase.auth.GoogleAuthProvider();

// Function to handle Google sign-in
function signInWithGoogle() {
  auth.signInWithPopup(provider)
    .then((result) => {
      // Successful authentication
      const user = result.user;
      console.log('Authenticated user:', user);
    })
    .catch((error) => {
      // Failed authentication
      console.log('Authentication failed:', error.message);
    });
}

// Call the signInWithGoogle function when the login button is clicked
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', signInWithGoogle);