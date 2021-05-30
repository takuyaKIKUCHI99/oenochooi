import React, { FC } from 'react';

import { List, Image } from 'semantic-ui-react';
import EllipsisMenu from 'containers/molecules/EllipsisMenu';

import { SubCategoryItems, WineType } from 'data/tastingSheet';

import firebase from 'firebase';
import dateFormatter from 'utils/functions/dateFormatter';

type CreatedBy = {
  id: string;
  name: string;
  photo: string;
};

export type TastingSheetDoc = {
  appearance: SubCategoryItems;
  conclusion: SubCategoryItems;
  createdAt: firebase.firestore.Timestamp;
  createdBy: CreatedBy;
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
      <Image avatar src={tastingSheet.createdBy.photo} />

      <EllipsisMenu
        id={id}
        title={tastingSheet.title}
        createdAt={tastingSheet.createdAt}
      />
    </List.Content>

    <List.Icon
      name="circle"
      verticalAlign="middle"
      color={tastingSheet.wineType === 'red' ? 'purple' : 'yellow'}
    />

    <List.Content>
      <List.Header>{tastingSheet.title || 'No Title'}</List.Header>
      <List.Description>
        {dateFormatter(tastingSheet.createdAt.toDate())}
      </List.Description>
    </List.Content>
  </List.Item>
);

export default ListItem;
