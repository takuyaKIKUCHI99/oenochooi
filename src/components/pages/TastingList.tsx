import React, { FC } from 'react';
import { List, Header } from 'semantic-ui-react';
import ListItem, { TastingSheetsDoc } from 'components/organisms/ListItem';

type Props = {
  tastingSheets: TastingSheetsDoc[] | undefined;
};

const TastingList: FC<Props> = ({ tastingSheets }) => (
  <>
    <Header as="h1" textAlign="center">
      テイスティングリスト
    </Header>
    <List selection verticalAlign="middle">
      <ListItem tastingSheets={tastingSheets} />
    </List>
  </>
);

export default TastingList;
