const admin = require("firebase-admin");
const firebase = require("firebase");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://safnid.firebaseio.com"
});
const db = admin.firestore();

var firebaseConfig = {
  apiKey: "AIzaSyBDYFYiyfk5D4QrH0wVyFVquProitgxeJ8",
  authDomain: "safnid.firebaseapp.com",
  databaseURL: "https://safnid.firebaseio.com",
  projectId: "safnid",
  storageBucket: "safnid.appspot.com",
  messagingSenderId: "140553988732",
  appId: "1:140553988732:web:d651c6957d22b2c20537f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = {
  admin,
  db,
  firebase
};
