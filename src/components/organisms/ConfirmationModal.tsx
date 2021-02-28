import React, { FC, ReactNode } from 'react';
import { Modal } from 'semantic-ui-react';

type Props = {
  open: boolean;
  toggleModal: (bool: boolean) => void;
  trigger: ReactNode;
  children: ReactNode;
};

const ConfirmationModal: FC<Props> = ({
  open,
  toggleModal,
  trigger,
  children,
}) => (
  <Modal
    basic
    onClose={() => toggleModal(false)}
    onOpen={() => toggleModal(true)}
    open={open}
    size="small"
    trigger={trigger}
  >
    {children}
  </Modal>
);

export default ConfirmationModal;
