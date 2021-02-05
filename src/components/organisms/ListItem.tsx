import React, { FC } from 'react';
import { Card } from 'semantic-ui-react';
import WineTypeDot from 'components/molecules/WineTypeDot';

const style = {
  flexDirection: 'row',
  alignItems: 'center',
  height: '3rem',
};

const ListItem: FC = () => (
  <>
    <Card fluid style={style}>
      <WineTypeDot />
      <p>2012/02/02 9:35</p>
    </Card>
    <Card fluid>
      <p>2012/02/02 9:35</p>
    </Card>
    <Card fluid>
      <p>2012/02/02 9:35</p>
    </Card>
    <Card fluid>
      <p>2012/02/02 9:35</p>
    </Card>
    <Card fluid>
      <p>2012/02/02 9:35</p>
    </Card>
  </>
);

export default ListItem;
