import React, { FC } from 'react';

import { List } from 'semantic-ui-react';
import Spinner from 'components/molecules/Spinner';
import TastingList from 'components/pages/TastingList';
import ListItem from 'containers/organisms/ListItem';

import useGetTastingSheets from 'utils/hooks/useGetTastingSheets';

const EnhancedTastingList: FC = () => {
  const tastingSheets = useGetTastingSheets();

  const list = () => {
    if (!tastingSheets) return <Spinner />;

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
