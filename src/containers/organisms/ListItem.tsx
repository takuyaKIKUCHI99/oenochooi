import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import ListItem, { TastingSheetsDoc } from 'components/organisms/ListItem';

import { CategoryItems } from 'data/tastingCategories';

export type Categories = {
  [key: string]: CategoryItems;
};

type Props = {
  tastingSheets: TastingSheetsDoc[] | undefined;
};

const EnhancedListItem: FC<Props> = ({ tastingSheets }) => {
  const history = useHistory();

  const handleClick = (id: string) => {
    history.push(`/tastingSheet/${id}`);
  };

  return <ListItem tastingSheets={tastingSheets} handleClick={handleClick} />;
};

export default EnhancedListItem;
