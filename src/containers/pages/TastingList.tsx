import React, { useState, useEffect, FC } from 'react';
import List from 'components/pages/TastingList';
import { TastingSheetDoc, Categories } from 'components/organisms/ListItem';
import { db } from '../../firebase';

const EnhancedTastingList: FC = () => {
  const [tastingSheets, setTastingSheets] = useState<TastingSheetDoc[]>();

  useEffect(() => {
    db.collection('tastingSheets')
      .orderBy('createdAt', 'desc')
      .get()
      .then((querySnapshot) => {
        const { docs } = querySnapshot;
        if (!docs) return;

        const tastingSheetDocs = docs.map<TastingSheetDoc>(
          (doc): TastingSheetDoc => {
            const tastingSheet: Categories = doc.data();

            return { id: doc.id, ...tastingSheet } as TastingSheetDoc;
          },
        );
        setTastingSheets(tastingSheetDocs);
      })
      .catch(() => {
        // Todo: Error handling will be implemented later!
        // eslint-disable-next-line no-console
        console.log('error occured');
      });
  }, []);

  if (!tastingSheets?.length) {
    return <p>まだテイスティングアイテムがありません</p>;
  }

  return <List tastingSheets={tastingSheets} />;
};

export default EnhancedTastingList;
