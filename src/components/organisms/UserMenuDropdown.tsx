import React, { FC, ReactNode } from 'react';

import { Dropdown } from 'semantic-ui-react';

type Props = {
  trigger: ReactNode;
  handleLogout: () => void;
};

const UserMenuDropdown: FC<Props> = ({ trigger, handleLogout }) => (
  <Dropdown trigger={trigger}>
    <Dropdown.Menu>
      <Dropdown.Item text="Logout" onClick={handleLogout} />
    </Dropdown.Menu>
  </Dropdown>
);

export default UserMenuDropdown;
