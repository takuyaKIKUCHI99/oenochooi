import React, { FC } from 'react';

import EllipsisMenu from 'components/molecules/EllipsisMenu';
import DeleteTastingSheetModal from 'containers/organisms/DeleteTastingSheetModal';
import UpdateTitleModal from 'containers/organisms/UpdateTitleModal';

type Props = {
  id: string;
};

const EnhancedEllipsisMenu: FC<Props> = ({ id }) => (
  <EllipsisMenu>
    <UpdateTitleModal id={id} />
    <DeleteTastingSheetModal id={id} />
  </EllipsisMenu>
);

export default EnhancedEllipsisMenu;
