import React, { useEffect, FC } from 'react';
import List from 'components/pages/List';
import { db } from '../../firebase';

const EnhancedList: FC = () => {
  // const [tastingSheet, setTastingSheet] = useState();

  useEffect(() => {
    db.collection('tastingSheets')
      .get()
      .then((querySnapshot) => {
        const tastingSheets = querySnapshot.docs.map((doc) => {
          const tastingSheet = doc.data();

          return { id: doc.id, ...tastingSheet };
        });
        console.log(tastingSheets);
      })
      .catch(() => {
        console.log('error occured');
      });
  }, []);

  return <List />;
};

export default EnhancedList;
