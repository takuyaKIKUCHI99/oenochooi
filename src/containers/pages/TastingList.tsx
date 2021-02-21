import React, { useState, useEffect, FC } from 'react';

import { List } from 'semantic-ui-react';
import Spinner from 'components/molecules/Spinner';
import TastingList from 'components/pages/TastingList';
import ListItem from 'containers/organisms/ListItem';
import { TastingSheetDoc } from 'components/organisms/ListItem';

import { db } from '../../firebase';

const EnhancedTastingList: FC = () => {
  const [tastingSheets, setTastingSheets] = useState<TastingSheetDoc[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    db.collection('tastingSheets')
      .orderBy('createdAt', 'desc')
      .get()
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
        setIsLoading(false);
      })
      .catch(() => {
        // Todo: Error handling will be implemented later!
        // eslint-disable-next-line no-console
        console.log('error occured');
      });
  }, []);

  const list = () => {
    if (isLoading) {
      return <Spinner />;
    }

    if (!tastingSheets.length) {
      return <p>まだテイスティングリストはありません</p>;
    }

    return (
      <List selection verticalAlign="middle">
        {tastingSheets.map((tastingSheet) => (
          <ListItem
            key={tastingSheet.id}
            tastingSheet={tastingSheet}
            id={tastingSheet.id}
          />
        ))}
      </List>
    );
  };

  return <TastingList>{list()}</TastingList>;
};

export default EnhancedTastingList;
