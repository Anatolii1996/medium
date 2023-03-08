/* eslint-disable */
import React, { useState } from "react";
import { Button, Modal } from "antd";

const CheckIn = ({currentRoom}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

  return (
    <>
      <Button onClick={showModal} type="primary" disabled={currentRoom.guest}>
        Check in
      </Button>
      <Modal
        title={`Do you really want to check in the room ${currentRoom.number} ?` }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      </Modal>
    </>
  );
};
export default CheckIn;
