import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import TastingSheetHeader from 'components/organisms/PageHeader';

const EnhancedTastingListHeader: FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/tastingSheet');
  };

  const actionElement = (
    <Dropdown text="テイスティングシート作成">
      <Dropdown.Menu>
        <Dropdown.Item
          text="赤ワイン"
          label={{ color: 'purple', empty: true, circular: true }}
          onClick={handleClick}
        />
        <Dropdown.Item
          text="白ワイン"
          label={{ color: 'yellow', empty: true, circular: true }}
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
