import React, { FC, useState } from 'react';
import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';
import ConfirmationModal from 'components/organisms/ConfirmationModal';

const DeleteTastingSheetModal: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = (bool: boolean) => {
    setOpen(bool);
  };

  const trigger = <Dropdown.Item icon="trash" text="削除" />;

  return (
    <ConfirmationModal
      trigger={trigger}
      open={open}
      toggleModal={(bool) => toggleModal(bool)}
    >
      <Header icon>
        <Icon name="trash" />
        テイスティングシートの削除
      </Header>
      <Modal.Content>
        <p>「タイトルなし」（作成日時：yyyy/mm/dd hh:mm:ss) を削除しますか</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </ConfirmationModal>
  );
};

export default DeleteTastingSheetModal;
