import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from 'contexts';
import { TastingSheetDoc } from 'components/organisms/ListItem';

const useGetTastingSheets = (): TastingSheetDoc[] | undefined => {
  const { db } = useContext(FirebaseContext);

  const [tastingSheets, setTastingSheets] = useState<TastingSheetDoc[]>();

  useEffect(() => {
    if (!db) throw new Error('Firestore is not initialized');

    db.collection('tastingSheets')
      .orderBy('createdAt', 'desc')
      .get() // { source: 'cache' }
      .then((querySnapshot) => {
        const { docs } = querySnapshot;
        if (!docs) return;

        const tastingSheetDocs = docs.map<TastingSheetDoc>(
          (doc): TastingSheetDoc => {
            const tastingSheet = doc.data();

            return { id: doc.id, ...tastingSheet } as TastingSheetDoc;
          },
        );
        setTastingSheets(tastingSheetDocs);
      })
      .catch(() => {
        // Todo: Error handling will be implemented later!
        // eslint-disable-next-line no-console
        console.log('error occurred');
      });
  }, [db]);

  return tastingSheets;
};

export default useGetTastingSheets;
