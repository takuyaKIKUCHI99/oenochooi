import React, { FC } from 'react';

import { List } from 'semantic-ui-react';

import { CategoryItems, WineType } from 'data/tastingCategories';

import firebase from 'firebase';
import dateFormatter from 'utils/dateFormatter';

export type Categories = {
  [key: string]: CategoryItems;
};

export type TastingSheetDoc = {
  wineType: WineType;
  appearance: CategoryItems;
  nose: CategoryItems;
  palate: CategoryItems;
  conclusion: CategoryItems;
  createdAt: firebase.firestore.Timestamp;
};

export type TastingSheetsDoc = {
  id: string;
  tastingSheet: TastingSheetDoc;
};

type Props = {
  id: string;
  tastingSheet: TastingSheetDoc;
  handleClick: (selectedId: string) => void;
};

const ListItem: FC<Props> = ({ id, tastingSheet, handleClick }) => (
  <>
    <List.Item onClick={() => handleClick(id)}>
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
