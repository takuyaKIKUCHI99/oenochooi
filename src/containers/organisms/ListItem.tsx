import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import ListItem, { TastingSheetDoc } from 'components/organisms/ListItem';

type Props = {
  id: string;
  tastingSheet: TastingSheetDoc;
};

const EnhancedListItem: FC<Props> = ({ tastingSheet, id }) => {
  const history = useHistory();

  const handleClick = (
    selectedId: string,
    selectedTastingSheet: TastingSheetDoc,
  ) => {
    history.push({
      pathname: `/tastingSheet/${selectedId}`,
      state: selectedTastingSheet,
    });
  };

  return (
    <ListItem id={id} tastingSheet={tastingSheet} handleClick={handleClick} />
  );
};

export default EnhancedListItem;
