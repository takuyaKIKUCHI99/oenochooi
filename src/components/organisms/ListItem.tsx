import React, { FC } from 'react';

import { List } from 'semantic-ui-react';

import { SubCategoryItems, WineType } from 'data/tastingSheet';

import firebase from 'firebase';
import dateFormatter from 'utils/dateFormatter';

export type TastingSheetDoc = {
  id: string;
  wineType: WineType;
  appearance: SubCategoryItems;
  nose: SubCategoryItems;
  palate: SubCategoryItems;
  conclusion: SubCategoryItems;
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
