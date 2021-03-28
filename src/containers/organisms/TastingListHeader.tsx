import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Dropdown } from 'semantic-ui-react';
import TastingSheetHeader from 'components/organisms/PageHeader';

import { WineType } from 'data/tastingSheet';

import paths from 'paths';

const EnhancedTastingListHeader: FC = () => {
  const history = useHistory();

  const handleClick = (wineType: WineType) => {
    history.push({
      pathname: paths.tasting,
      state: { newWineType: wineType },
    });
  };

  const actionElement = (
    <Dropdown text="テイスティングシート作成">
      <Dropdown.Menu>
        <Dropdown.Item
          text="赤ワイン"
          label={{ color: 'purple', empty: true, circular: true }}
          onClick={() => handleClick('red')}
        />
        <Dropdown.Item
          text="白ワイン"
          label={{ color: 'yellow', empty: true, circular: true }}
          onClick={() => handleClick('white')}
        />
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <TastingSheetHeader
      headerTitle="テイスティングリスト"
      actionElement={actionElement}
    />
  );
};

export default EnhancedTastingListHeader;
