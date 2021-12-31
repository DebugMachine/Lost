import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDvtiRYsn042q53d5Yb53DYHb2SM_1Mbg4",
  authDomain: "lost-and-found-5af63.firebaseapp.com",
  databaseURL: "https://lost-and-found-5af63-default-rtdb.firebaseio.com",
  projectId: "lost-and-found-5af63",
  storageBucket: "lost-and-found-5af63.appspot.com",
  messagingSenderId: "180128560469",
  appId: "1:180128560469:web:03b5256af39d7c54f1ebdc"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();