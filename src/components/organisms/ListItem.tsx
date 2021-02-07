import React, { FC } from 'react';
import { Card } from 'semantic-ui-react';
import WineTypeDot from 'components/molecules/WineTypeDot';
import { CategoryItems, WineType } from 'data/tastingCategories';
import firebase from 'firebase';
import dateFormatter from 'utils/dateFormatter';

const style = {
  flexDirection: 'row',
  alignItems: 'center',
  height: '3rem',
};

export type Categories = {
  [key: string]: CategoryItems;
};

type TastingSheetDoc = {
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
};

const ListItem: FC<Props> = ({ tastingSheets }) => (
  <>
    {tastingSheets?.map((doc) => (
      <Card fluid style={style} key={doc.id}>
        <WineTypeDot wineType={doc.tastingSheet.wineType} />
        <p>{dateFormatter(doc.tastingSheet.createdAt.toDate())}</p>
      </Card>
    ))}
  </>
);

export default ListItem;
