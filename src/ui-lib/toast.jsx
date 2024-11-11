import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
    background-color: lightskyblue !important; 
    color: #000!important;  
  }
.Toastify__toast--success {
    background: 'rgb(51, 187, 102)'; 
    background-color: lightgreen !important;    
    color: #000!important;  
  }
.Toastify__toast--warning {
    background: 'rgb(254, 255, 20)'; 
    background-color: lightgoldenrodyellow !important;
    color: #000!important;     
  }
.Toastify__toast--error {
    background: 'rgb(255, 102, 102)';
    background-color: lightcoral !important; 
    color: #000!important;  
  }
`;
export const showToast = ({ type, message }) => {
  switch (type) {
    case 'success':
      toast.success(message)
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};

export default function ToastAnimated() {
  return <Toast position="bottom-center"/>;
}