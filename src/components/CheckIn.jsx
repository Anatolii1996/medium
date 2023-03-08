/* eslint-disable */
import React, { useState } from "react";
import { Button, Modal, Checkbox, Form, Input } from "antd";

const CheckIn = ({ currentRoom }) => {
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
        title={`Do you really want to check in the room ${currentRoom.number} ?`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Please enter your name</p>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};
export default CheckIn;
