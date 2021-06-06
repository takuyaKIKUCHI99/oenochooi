import React, { FC } from 'react';

import { Container } from 'semantic-ui-react';

import UserMenuDropdown from 'containers/organisms/UserMenuDropdown';

const AppHeader: FC = () => (
  <Container textAlign="right">
    <UserMenuDropdown />
  </Container>
);

export default AppHeader;
