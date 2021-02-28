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
  return new Promise((resolve) => {
    if (type === 'create') {
      const createdAt = firebase.firestore.Timestamp.now();

      db.collection('tastingSheets')
        .add({ ...tastingSheetArgs, createdAt })
        .then(() => resolve('resolved'))
        .catch((error) => {
          // Todo: Replace console when Message is ready
          // eslint-disable-next-line no-console
          console.error('Error adding document: ', error);
        });
    }

    if (type === 'update') {
      db.collection('tastingSheets')
        .doc(id)
        .update({ ...tastingSheetArgs })
        .then(() => resolve('resolved'))
        .catch((error) => {
          // Todo: Replace console when Message is ready
          // eslint-disable-next-line no-console
          console.error('Error adding document: ', error);
        });
    }

    if (type === 'delete') {
      // Todo: update
    }
  });
};

export default firestoreDataManipulation;
