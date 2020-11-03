import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalExample = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>Calculate</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Answer</ModalHeader>
        <ModalBody>
            $24,990.234
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;