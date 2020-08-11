import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAmQoC1DuzsdSHULu9mp4dSaN5VLmrlv8s",
    authDomain: "mudarisv2.firebaseapp.com",
    databaseURL: "https://mudarisv2.firebaseio.com",
    projectId: "mudarisv2",
    storageBucket: "mudarisv2.appspot.com",
    messagingSenderId: "226124876599",
    appId: "1:226124876599:web:dfeb7877324c88557aa8b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;