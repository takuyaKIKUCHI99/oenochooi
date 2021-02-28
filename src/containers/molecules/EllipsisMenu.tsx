import React, { FC } from 'react';
import { Dropdown } from 'semantic-ui-react';
import EllipsisMenu from 'components/molecules/EllipsisMenu';
import DeleteTastingSheetModal from 'containers/organisms/DeleteTastingSheetModal';

type Props = {
  id: string;
};

const EnhancedEllipsisMenu: FC<Props> = ({ id }) => (
  <EllipsisMenu>
    <Dropdown.Item icon="edit" text="タイトル編集" />
    <DeleteTastingSheetModal id={id} />
  </EllipsisMenu>
);

export default EnhancedEllipsisMenu;
