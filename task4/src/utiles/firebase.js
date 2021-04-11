import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC5XB6_NJZBGu3zsiPwNNrRHRCiLmsRX6M",
  authDomain: "myfirstfirebase-a3c63.firebaseapp.com",
  databaseURL: "https://myfirstfirebase-a3c63-default-rtdb.firebaseio.com",
  projectId: "myfirstfirebase-a3c63",
  storageBucket: "myfirstfirebase-a3c63.appspot.com",
  messagingSenderId: "987410000386",
  appId: "1:987410000386:web:65f7b5746f5fd22703551b",
  measurementId: "G-D7ME3QMG93"
};
firebase.initializeApp(config);

export default firebase