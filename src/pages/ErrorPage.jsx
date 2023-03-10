/* eslint-disable */
import React, { useState } from 'react';
import {  Modal } from 'antd';
import { useNavigate } from "react-router";

const ErrorPage=()=>{
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(true);
   
    const handleOk = () => {
        navigate("/");
    };
    const handleCancel = () => {
        navigate("/");
      setIsModalOpen(false);
    };
    return (   
        
        <Modal title="Error" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Invalid username or password!!!</p>
         
        </Modal>
      
    );
    
}
export default ErrorPage;