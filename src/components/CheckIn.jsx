/* eslint-disable */
import React, { useState } from "react";
import { Button, Modal,  Form, Input, DatePicker } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { checkInRoom } from "../redux/action/actionCreator";
import { useDispatch } from 'react-redux';
import moment from 'moment';

const CheckIn = ({ currentRoom }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const disabledDate = (current) => current && current < moment().endOf('day');

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
        title={`CHECK IN`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Check in"
      >
        <hr/>
        <Form form={form} layout="vertical"
          name="basic"
          labelCol={{
            span: 12,
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
            label="Please, enter the guest`s name:"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Guest's Name" prefix={<UserOutlined />}/>
          </Form.Item>
          <Form.Item
            name="checkOutDate"
            label="Please, enter the approximate date of guest checkout:"
          >
            <DatePicker disabledDate={disabledDate} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default CheckIn;
