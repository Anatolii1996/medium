/* eslint-disable */
import React, { useState } from "react";
import { Button, Modal,  Form, Input } from "antd";
import { checkInRoom } from "../redux/action/actionCreator";
import { useDispatch } from 'react-redux';

const CheckIn = ({ currentRoom }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async  () => {
    const values = await form.validateFields();
    form.resetFields();
    await dispatch(checkInRoom(currentRoom.id, values));
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
        <Form form={form}
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
