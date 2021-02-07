import React, { useState, useEffect, FC } from 'react';
import List from 'components/pages/TastingList';
import { TastingSheetsDoc, Categories } from 'components/organisms/ListItem';
import { db } from '../../firebase';

const EnhancedTastingList: FC = () => {
  const [tastingSheets, setTastingSheets] = useState<TastingSheetsDoc[]>();

  useEffect(() => {
    db.collection('tastingSheets')
      .get()
      .then((querySnapshot) => {
        const { docs } = querySnapshot;
        if (!docs) return;

        const tastingSheetDocs = docs.map<TastingSheetsDoc>(
          (doc): TastingSheetsDoc => {
            const tastingSheet: Categories = doc.data();

            return { id: doc.id, ...tastingSheet } as TastingSheetsDoc;
          },
        );
        setTastingSheets(tastingSheetDocs);
      })
      .catch(() => {
        console.log('error occured');
      });
  }, []);

  return <List tastingSheets={tastingSheets} />;
};

export default EnhancedTastingList;
