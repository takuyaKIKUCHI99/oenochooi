import React, { FC, useContext } from 'react';
import { FirebaseContext, UserContext } from 'contexts';

import { Image } from 'semantic-ui-react';

import UserMenuDropdown from 'components/organisms/UserMenuDropdown';

const EnhancedUserMenuDropdown: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  const trigger = (
    <span>
      <Image avatar src={user?.photoURL} /> {user?.displayName}
    </span>
  );

  return (
    <UserMenuDropdown trigger={trigger} handleLogout={() => auth?.signOut()} />
  );
};

export default EnhancedUserMenuDropdown;
