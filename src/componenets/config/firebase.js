import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig} from './db'

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const contactAuth = firebase.auth();
  const contactFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { contactAuth, contactFirestore ,timestamp };