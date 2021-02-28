import React, { FC } from 'react';

import { List } from 'semantic-ui-react';
import EllipsisMenu from 'containers/molecules/EllipsisMenu';

import { SubCategoryItems, WineType } from 'data/tastingSheet';

import firebase from 'firebase';
import dateFormatter from 'utils/dateFormatter';

export type TastingSheetDoc = {
  appearance: SubCategoryItems;
  conclusion: SubCategoryItems;
  createdAt: firebase.firestore.Timestamp;
  id: string;
  nose: SubCategoryItems;
  palate: SubCategoryItems;
  title: string;
  wineType: WineType;
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
  <List.Item onClick={() => handleClick(id, tastingSheet)}>
    <List.Content floated="right">
      <EllipsisMenu id={id} />
    </List.Content>
    <List.Icon
      name="circle"
      color={tastingSheet.wineType === 'red' ? 'purple' : 'yellow'}
    />
    <List.Content>
      {dateFormatter(tastingSheet.createdAt.toDate())}
    </List.Content>
  </List.Item>
);

export default ListItem;
