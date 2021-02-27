import React, { FC, ReactNode } from 'react';
import { Dropdown } from 'semantic-ui-react';

type Props = {
  children: ReactNode;
};

const EllipsisMenu: FC<Props> = ({ children }) => (
  <Dropdown icon="ellipsis vertical" floating>
    <Dropdown.Menu>{children}</Dropdown.Menu>
  </Dropdown>
);

export default EllipsisMenu;
