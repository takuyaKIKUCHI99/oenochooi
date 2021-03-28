import firebase from 'firebase/app';
import { createContext } from 'react';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

type UserContextValue = {
  userName: string | null;
  credential: firebase.auth.UserCredential | null;
  setUserName: (userName: string | null) => void;
  setCredential: (credential: firebase.auth.UserCredential | null) => void;
};

export const UserContext = createContext<UserContextValue>({
  userName: null,
  credential: null,
  setUserName: () => undefined,
  setCredential: () => undefined,
});
