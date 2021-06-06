import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext, UserContext } from 'contexts';

import { Dropdown, Image } from 'semantic-ui-react';
import PageHeader from 'components/organisms/PageHeader';

import { WineType } from 'data/tastingSheet';

import paths from 'paths';

const EnhancedTastingListHeader: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const history = useHistory();

  const handleClick = (wineType: WineType) => {
    history.push({
      pathname: paths.tasting,
      state: { newWineType: wineType },
    });
  };

  const actionElement = () => {
    const trigger = (
      <span>
        <Image avatar src={user?.photoURL} /> {user?.displayName}
      </span>
    );

    return (
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

        <Dropdown trigger={trigger}>
          <Dropdown.Menu>
            <Dropdown.Item text="Logout" onClick={() => auth?.signOut()} />
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  };

  return (
    <PageHeader
      headerTitle="テイスティングリスト"
      actionElement={actionElement()}
    />
  );
};

export default EnhancedTastingListHeader;
