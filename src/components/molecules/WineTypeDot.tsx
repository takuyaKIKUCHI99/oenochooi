import React, { FC } from 'react';
import { Icon } from 'semantic-ui-react';
import { WineType } from 'data/tastingCategories';

type Props = {
  wineType: WineType;
};

const WineTypeDot: FC<Props> = ({ wineType }) => (
  <Icon name="circle" color={wineType === 'red' ? 'purple' : 'yellow'} />
);

export default WineTypeDot;
