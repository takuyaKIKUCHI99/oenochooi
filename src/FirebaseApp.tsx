import React, { FC } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import FirebaseContext from './contexts';

const FirebaseApp: FC = ({ children }) => {
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
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
