import React, { FC } from 'react';
import { Card } from 'semantic-ui-react';
import WineTypeDot from 'components/molecules/WineTypeDot';
import { CategoryItems } from 'data/tastingCategories';

const style = {
  flexDirection: 'row',
  alignItems: 'center',
  height: '3rem',
};

export type Categories = {
  [key: string]: CategoryItems;
};

export type TastingSheetsDoc = {
  id: string;
  tastingSheet: Categories;
};

type Props = {
  tastingSheets: TastingSheetsDoc[] | undefined;
};

const ListItem: FC<Props> = ({ tastingSheets }) => (
  <>
    {tastingSheets?.map((_) => (
      <Card fluid style={style}>
        <WineTypeDot />
        <p>2012/02/02 9:35</p>
      </Card>
    ))}
  </>
);

export default ListItem;
