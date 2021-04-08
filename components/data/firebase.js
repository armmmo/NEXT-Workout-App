import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  "type": "service_account",
  "project_id": "mediasite-19827",
  "private_key_id": "bd8447e9bd12d0d2987311de36f0ed663eb20b4a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDgYs/f+HQXrOSQ\nxFstS+dRqAiUyegLbdHcBAgRC82Cm3ygS+CVYv+xP4dJ7vUbCJ32P9jHOFpBV6SI\npMjxfcPuHQgUzJy36iTmF8A/WpG+kMhXPpawN7h/DAZee3B3d3PKAWo1dK+UWSqx\nPDWt2sgbVvIeSWVcexdEeOjxibMJU9qtKTTeTN5+Mk39/YVaT2qXF6crwPY2XN/Y\nvJRQcfbSBVQa6K1G8yzghDWnQxeGIjNu3uukGdJAGQVrJBHFKFi5k+Zj1GI1QmT2\nyg4bpPhJ4xLnY/o2lhlPPgj8skcrduHZpTlciHAL7sSRiveWhE2R98p+bUE6ZHUK\nMNgK3Jn3AgMBAAECggEAFoYqEnQrndTKfN25FABH5XfV+gQ/5CXPUyP0dgGWokMJ\nbO3boCNNQiBRFv2DDTD9lPfZGDvH6OyV+kF7ClgdkDbJ1jdT5AJVAePlyyDu+w99\njNnI4UI2pZ+HZCSaqDi4HtGq361+591WM8RffxGJ1MoS3odvmAD4gknA2GjXgrAA\nEiqHLxLUyhooLtCE5ay3Gys/ODq5QjYS4vRi70ZQYfTVFPNsnXwqmrE2zw6XG6oJ\nYnkasnP8jaj642E+dkjf6ez+Ovp3Nzb9OjGM4NZvAFtYtuXGjyyXbQAeSe/nGw9f\nCAVwTdtEbcvrMd47dAfPPKuSsz8FXpNe8lZ5JH6YQQKBgQDx6/AahRITD4XFEC6g\nnyCbP1FyTpT/AhlAroNBCl3zTCJnZzmxZZ0QHJwqDQ8ktXpWSWAk8lOsDGIWkud5\nRV0dWO6JMJ1zq26CNfgOwIJfdkBgtTTbethjkwvWTHYgiZPO7VUU+EjZDVpiOO+D\nlnrRyunzIXUApIxYwRucBokylQKBgQDtcaJgb0ET+6JhWtfG6nBp9t2Qxb935OgA\nkJG3KlK0O3z01I8Qzmt8RyFfIF/qHUwJ5z2C5ersIXF9W8J9pCOcMINs3tKa1aZD\nAWmkJzmj35TaXxJEaq2TiG7Geve53sFfAo2qOumu7IKZ2GVjuVi9fz1kbqW7Ox7f\nxeojaWhjWwKBgHITFiH7M52nSSW2TrZQsrhh8A7dfSaOH8g/QgcOU2ThNqvZofvD\ndX9ebkjp5YUiyfAcI2jol4neQPZyCRJHIfQvtjMcqHIdmTtvJWwXXKKVCSBQ8f64\ne4bglMlVPrJzDS6a/O6pcPhgcok0XcSH1ZxNeWm7Egfej4tea51z+4fNAoGAE5Jc\nSgqhmJ4TQmcUhibo4TMiDD7gi2do4DMKb8ijTIvivuOOb1o0begHDipC/a8wh1hy\nL4n4FUKkcirQGz8eWE9/ZcfwICcgL0G8jXVWQPW69U0E2nLYn+KNDvsv1DhSRByX\nxMJaZLrGARxfLxsl/2ivjMm6C3bSEqvjosubeSUCgYBzW2V1AeposihD8XDHOT6A\nWHU7zM/3ZmnFHziXKuJM9edG2A9csL2mgpvKsuK1zIqvXMfu/wfiQvvOJTEYf+xZ\nWsbTwtWWYTftUi66rC0Yxw6IhwYT3fq85TTW8EOqKq0TRt2ZKDRPVLIk3+zWYydi\nxu0ApV8ZN2tXWpcnMYCOjg==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-c580r@mediasite-19827.iam.gserviceaccount.com",
  "client_id": "102017014601791628038",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-c580r%40mediasite-19827.iam.gserviceaccount.com"
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
  ],
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
