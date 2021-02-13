import React, { FC } from 'react';

import { List } from 'semantic-ui-react';

import { CategoryItems, WineType } from 'data/tastingCategories';

import firebase from 'firebase';
import dateFormatter from 'utils/dateFormatter';

export type Categories = {
  [key: string]: CategoryItems;
};

export type TastingSheetDoc = {
  id: string;
  wineType: WineType;
  appearance: CategoryItems;
  nose: CategoryItems;
  palate: CategoryItems;
  conclusion: CategoryItems;
  createdAt: firebase.firestore.Timestamp;
};

type Props = {
  id: string;
  tastingSheet: TastingSheetDoc;
  handleClick: (
    selectedId: string,
    selectedTastingSheet: TastingSheetDoc,
  ) => void;
};

const ListItem: FC<Props> = ({ id, tastingSheet, handleClick }) => (
  <>
    <List.Item onClick={() => handleClick(id, tastingSheet)}>
      <List.Icon
        name="circle"
        color={tastingSheet.wineType === 'red' ? 'purple' : 'yellow'}
      />
      <List.Content>
        {dateFormatter(tastingSheet.createdAt.toDate())}
      </List.Content>
    </List.Item>
  </>
);

export default ListItem;
