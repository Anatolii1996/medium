/* eslint-disable */
import React, { useState } from 'react';
import {  Modal } from 'antd';

const ErrorPage=()=>{
    const [isModalOpen, setIsModalOpen] = useState(true);
   
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (   
        
        <Modal title="Error" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Invalid username or password!!!</p>
         
        </Modal>
      
    );
    
}
export default ErrorPage;