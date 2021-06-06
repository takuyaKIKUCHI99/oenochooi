import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from 'contexts';

import { Button, Dropdown } from 'semantic-ui-react';
import PageHeader from 'components/organisms/PageHeader';

import { WineType } from 'data/tastingSheet';

import paths from 'paths';

const EnhancedTastingListHeader: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const history = useHistory();

  const handleClick = (wineType: WineType) => {
    history.push({
      pathname: paths.tasting,
      state: { newWineType: wineType },
    });
  };

  const actionElement = (
    <>
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
      <Button
        basic
        style={{ marginLeft: '1rem' }}
        onClick={() => auth?.signOut()}
      >
        Logout
      </Button>
    </>
  );

  return (
    <PageHeader
      headerTitle="テイスティングリスト"
      actionElement={actionElement}
    />
  );
};

export default EnhancedTastingListHeader;
