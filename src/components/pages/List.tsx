import React, { FC } from 'react';
import { Card, Header } from 'semantic-ui-react';
import ListItem, { TastingSheetsDoc } from 'components/organisms/ListItem';

type Props = {
  tastingSheets: TastingSheetsDoc[] | undefined;
};

const List: FC<Props> = ({ tastingSheets }) => (
  <>
    <Header as="h1" textAlign="center">
      テイスティングリスト
    </Header>
    <Card.Group>
      <ListItem tastingSheets={tastingSheets} />
    </Card.Group>
  </>
);

export default List;
