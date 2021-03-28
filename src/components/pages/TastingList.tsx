import React, { FC } from 'react';

import TastingListHeader from 'containers/organisms/TastingListHeader';

const TastingList: FC = ({ children }) => (
  <>
    <header>
      <TastingListHeader />
    </header>
    <main>{children}</main>
  </>
);

export default TastingList;
