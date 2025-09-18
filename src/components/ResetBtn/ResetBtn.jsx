import React from 'react';
import styles from './ResetBtn.module.css';
import Button from '../Button/Button';

const ResetBtn = () => {
  const handleReset = () => {
    console.log("Nu har du börjat om spelet")
    alert("Reset")
  }

  return (
    <Button title="Reset" onClick={handleReset}/>
  );
};

export default ResetBtn;