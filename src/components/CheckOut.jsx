/* eslint-disable */
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { checkOutRoom } from "../redux/action/actionCreator";

const CheckOut = ({ currentRoom }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await dispatch(checkOutRoom(currentRoom.id));
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} type="primary" disabled={!currentRoom.guest}>
        Check out
      </Button>
      <Modal
        title={`Do you really want to check out the room ${currentRoom.number} ?`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};
export default CheckOut;
