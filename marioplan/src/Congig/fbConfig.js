import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initial Firebase
var config = {
  apiKey: "AIzaSyDKIZ27pQ2W9Gyee_uuV4afu6zxYbJxIDs",
  authDomain: "net-nimja-marioplan-1.firebaseapp.com",
  databaseURL: "https://net-nimja-marioplan-1.firebaseio.com",
  projectId: "net-nimja-marioplan-1",
  storageBucket: "net-nimja-marioplan-1.appspot.com",
  messagingSenderId: "564410734875"
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;