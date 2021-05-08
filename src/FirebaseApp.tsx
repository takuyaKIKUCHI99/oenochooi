import React, { FC, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseContext, UserContext } from './contexts';

const FirebaseApp: FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const auth = firebase.auth();
  const db = firebase.firestore();

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
