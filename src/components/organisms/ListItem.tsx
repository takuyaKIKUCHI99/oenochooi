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
  tastingSheets: TastingSheetsDoc[] | undefined;
  handleClick: (id: string) => void;
};

const ListItem: FC<Props> = ({ tastingSheets, handleClick }) => (
  <>
    {tastingSheets?.map((doc) => (
      <List.Item key={doc.id} onClick={() => handleClick(doc.id)}>
        <List.Icon
          name="circle"
          color={doc.tastingSheet.wineType === 'red' ? 'purple' : 'yellow'}
        />
        <List.Content>
          {dateFormatter(doc.tastingSheet.createdAt.toDate())}
        </List.Content>
      </List.Item>
    ))}
  </>
);

export default ListItem;
