import firebase from 'firebase/app';
import { createContext } from 'react';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

type UserContextValue = {
  user: firebase.User | null;
  setUser: (user: firebase.User | null) => void;
};

const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => undefined,
});

export { FirebaseContext, UserContext };
