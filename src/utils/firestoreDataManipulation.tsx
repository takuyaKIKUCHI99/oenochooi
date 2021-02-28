import { SubCategoryItems, WineType } from 'data/tastingSheet';
import firebase, { db } from '../firebase';

type TastingSheetArgs = {
  wineType: WineType;
  appearance: SubCategoryItems;
  nose: SubCategoryItems;
  palate: SubCategoryItems;
  conclusion: SubCategoryItems;
};

type Args = {
  tastingSheetArgs?: TastingSheetArgs;
  id?: string;
};

type Type = 'create' | 'update' | 'delete';

const firestoreDataManipulation = (
  { tastingSheetArgs, id }: Args,
  type: Type,
): Promise<string> => {
  const collection = 'tastingSheets';

  const handleError = (error: string) => {
    // Todo: Replace console when Message is ready
    // eslint-disable-next-line no-console
    console.error('Error adding document: ', error);
  };

  return new Promise((resolve) => {
    if (type === 'create') {
      const createdAt = firebase.firestore.Timestamp.now();

      db.collection(collection)
        .add({ ...tastingSheetArgs, createdAt })
        .then(() => resolve('resolved'))
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
