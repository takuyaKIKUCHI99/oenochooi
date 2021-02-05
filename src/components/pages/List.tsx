import React, { FC } from 'react';
import { Card, Header } from 'semantic-ui-react';
import ListItem from 'components/organisms/ListItem';

const List: FC = () => (
  <>
    <Header as="h1" textAlign="center">
      テイスティングリスト
    </Header>
    <Card.Group>
      <ListItem />
    </Card.Group>
  </>
);

export default List;
