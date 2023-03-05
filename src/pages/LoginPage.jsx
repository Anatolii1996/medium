/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { users } = useSelector((state) => state);

  const [userArrName, setUserArrName] = useState([]);
  const [userArrPass, setUserArrPass] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [validName, setValidName] = useState(5);
  const [validPass, setValidPass] = useState(5);

  useEffect(() => {
    for (const user in users) {
      setUserArrName((prevUserName) => [...prevUserName, users[user].name]);
      setUserArrPass((prevUserPass) => [...prevUserPass, users[user].password]);
    }
  }, [users]);

  const checkValidName = () => {
    for (const name of userArrName) {
      if (name == inputName) {
        return setValidName(true);
      }else{
        setValidName(false)
      }
    }
  };

  const checkValidPass = () => {
    for (const pass of userArrPass) {
      if (pass == inputPass) {
        return setValidPass(true);
      }else{
        setValidPass(false)
      }
    }
  };

  useEffect(() => {
    if (validPass===true && validName===true) {
      navigate("/content");
    }else if(validPass===false||validName===false){
      navigate("/error");
    }
  }, [validPass]);

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
      ><h4>Autentification</h4>
      <hr/>
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
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              checkValidName();
              checkValidPass();
              
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
