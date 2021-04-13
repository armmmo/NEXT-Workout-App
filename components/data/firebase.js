import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT_SvjLsot2zr19aeS8Mo-EC5PAWTSdhQ",
  authDomain: "mediasite-19827.firebaseapp.com",
  databaseURL: "https://mediasite-19827.firebaseio.com",
  projectId: "mediasite-19827",
  storageBucket: "mediasite-19827.appspot.com",
  messagingSenderId: "958361970687",
  appId: "1:958361970687:web:512b55eaac0cc92e23e9ca",
  measurementId: "G-848B7SKXPJ"
};

if (firebase.apps.length === 0) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
  console.log("firebase apps already running...");
}

const auth = firebase.auth();
const db = firebase.firestore();

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: firebase.auth.CredentialHelper.GOOGLE_YOLO,
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export { auth, db, uiConfig };

// const handleGoogleLogin = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();

//     auth
//       .signInWithPopup(googleProvider)
//       .then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//       });
//   };

//   const handleFacebookLogin = () => {
//     const facebookProvider = new firebase.auth.FacebookAuthProvider();

//     auth
//       .signInWithPopup(facebookProvider)
//       .then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // The signed-in user info.
//         var user = result.user;

//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         var accessToken = credential.accessToken;

//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;

//         // ...
//       });
//   };
