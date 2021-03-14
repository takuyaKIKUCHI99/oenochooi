import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase;

const db = firebase.firestore();

// Enable cache
// https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=ja
db.enablePersistence({ experimentalTabSynchronization: true })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Enable offline persistence');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log('error');
  });

export { db };
