import firebase from 'firebase/app';
import { createContext } from 'react';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

export default FirebaseContext;
