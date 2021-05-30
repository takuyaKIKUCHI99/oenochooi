import { SubCategoryItems, WineType } from 'data/tastingSheet';
import firebase from 'firebase/app';

type TastingSheetArgs = {
  appearance?: SubCategoryItems;
  conclusion?: SubCategoryItems;
  nose?: SubCategoryItems;
  palate?: SubCategoryItems;
  title?: string;
  wineType?: WineType;
} | null;

type Type = 'create' | 'update' | 'delete';

const firestoreDataManipulation = (
  db: firebase.firestore.Firestore | null,
  type: Type,
  id: string | undefined,
  tastingSheetArgs: TastingSheetArgs = null,
  user: firebase.User | null = null,
): Promise<string> => {
  const collection = 'tastingSheets';

  const handleError = (error: string) => {
    // Todo: Replace console when Message is ready
    // eslint-disable-next-line no-console
    console.error('Error adding document: ', error);
  };

  return new Promise((resolve) => {
    if (!db) throw new Error('Firestore is not initialized');

    if (type === 'create') {
      const createdAt = firebase.firestore.Timestamp.now();
      const createdBy = {
        id: user?.uid,
        name: user?.displayName,
        photo: user?.photoURL,
      };

      db.collection(collection)
        .add({ ...tastingSheetArgs, createdAt, createdBy })
        .then(() => {
          resolve('resolved');
        })
        .catch((error: string) => handleError(error));
    }

    if (type === 'update') {
      db.collection(collection)
        .doc(id)
        .update({ ...tastingSheetArgs })
        .then(() => resolve('resolved'))
        .catch((error: string) => handleError(error));
    }

    if (type === 'delete') {
      db.collection(collection)
        .doc(id)
        .delete()
        .then(() => resolve('resolved'))
        .catch((error: string) => handleError(error));
    }
  });
};

export default firestoreDataManipulation;
