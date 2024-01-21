/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getCurrentUser } from "../redux/action/actionCreator";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  const [checked, setChecked] = useState(true);
  // const [currentUser, setCurrentUser] = useState({});

  const [inputName, setInputName] = useState("user1");
  const [inputPass, setInputPass] = useState("pass1");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setInputName(localStorage.getItem("user"));
      setInputPass(localStorage.getItem("password"));
      checkValidity();

      navigate("/content");
    }
  }, []);

  // useEffect(()=>{
  //   dispatch(getCurrentUser(currentUser.image));
  // }, [currentUser])

  const checkValidity = () => {
    const currentUser = Object.values(users).find(
      (user) => user.name === inputName && user.password === inputPass
    );
    if (currentUser) {
      if (checked) {
        localStorage.setItem("user", currentUser.name);
        localStorage.setItem("password", currentUser.password);
      }
      
      // setCurrentUser(currentUser);
      dispatch(getCurrentUser(currentUser.image));
      navigate("/content");
    } else {
      navigate("/error");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkValidity();
  };

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
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <h4>Autentification</h4>
        <hr />
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
            placeholder={inputName}
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
            placeholder={inputPass}
            onChange={(e) => {
              setInputPass(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
            Remember me
          </Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e) => {
              handleFormSubmit(e);
            }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
