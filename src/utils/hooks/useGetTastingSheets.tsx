import { useEffect, useState } from 'react';
import { TastingSheetDoc } from 'components/organisms/ListItem';
import { db } from '../../firebase';

const useGetTastingSheets = (): TastingSheetDoc[] | undefined => {
  const [tastingSheets, setTastingSheets] = useState<TastingSheetDoc[]>();

  useEffect(() => {
    db.collection('tastingSheets')
      .orderBy('createdAt', 'desc')
      .get({ source: 'cache' })
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
  }, []);

  return tastingSheets;
};

export default useGetTastingSheets;
