/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useSelector } from "react-redux";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPage = () => {
  const { users } = useSelector((state) => state);
  const usersName = [];
  const usersPass = [];
  const [inputName, setInputName] = useState("");
  const [inputPass, setInputPass] = useState("");

  useEffect(() => {
    for (const user in users) {
      usersName.push(users[user].name);
      usersPass.push(users[user].password);
    }
  }, [users]);

  return (
    <div className="form-wrapper">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          <Input
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) => {
              setInputPass(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
      {/* {console.log(users)} */}
    </div>
  );
};

export default LoginPage;
