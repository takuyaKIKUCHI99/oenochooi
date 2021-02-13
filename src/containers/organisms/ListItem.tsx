import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import ListItem, { TastingSheetDoc } from 'components/organisms/ListItem';

import { CategoryItems } from 'data/tastingCategories';

export type Categories = {
  [key: string]: CategoryItems;
};

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
