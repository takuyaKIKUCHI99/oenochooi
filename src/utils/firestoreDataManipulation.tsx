import { SubCategoryItems, WineType } from 'data/tastingSheet';
import firebase, { db } from '../firebase';

type TastingSheetArgs = {
  wineType: WineType;
  appearance: SubCategoryItems;
  nose: SubCategoryItems;
  palate: SubCategoryItems;
  conclusion: SubCategoryItems;
};

const createTastingSheet = (tastingSheetArgs: TastingSheetArgs): void => {
  const createdAt = firebase.firestore.Timestamp.now();

  db.collection('tastingSheets')
    .add({ ...tastingSheetArgs, createdAt })
    .catch((error) => {
      // Todo: Replace console when Message is ready
      // eslint-disable-next-line no-console
      console.error('Error adding document: ', error);
    });
};

const updateTastingSheet = (
  tastingSheetArgs: TastingSheetArgs,
  id: string,
): void => {
  db.collection('tastingSheets')
    .doc(id)
    .update({ ...tastingSheetArgs })
    .catch((error) => {
      // Todo: Replace console when Message is ready
      // eslint-disable-next-line no-console
      console.error('Error adding document: ', error);
    });
};

const firestoreDataManipulation = (
  tastingSheetArgs: TastingSheetArgs,
  id: string | undefined,
): void => {
  if (id) {
    updateTastingSheet({ ...tastingSheetArgs }, id);
  } else {
    createTastingSheet({ ...tastingSheetArgs });
  }
};

export default firestoreDataManipulation;
