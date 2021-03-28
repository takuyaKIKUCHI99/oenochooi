import React, { FC, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseContext, UserContext } from './contexts';

const FirebaseApp: FC = ({ children }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [
    credential,
    setCredential,
  ] = useState<firebase.auth.UserCredential | null>(null);
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Enable cache
  // https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=ja
  // db.enablePersistence({
  //   experimentalTabSynchronization: true,
  // } as firebase.firestore.PersistenceSettings)
  //   .then(() => {
  //     // eslint-disable-next-line no-console
  //     console.log('Enable offline persistence');
  //   })
  //   .catch(() => {
  //     // eslint-disable-next-line no-console
  //     console.log('error');
  //   });

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      <UserContext.Provider
        value={{ userName, credential, setUserName, setCredential }}
      >
        {children}
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
