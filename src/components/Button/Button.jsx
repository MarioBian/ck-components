import React from 'react';
import styles from './Button.module.css';

const Button = ({ title = 'klicka på mig', onClick }) => {
  const handleClick = (e) => {
    console.log('du klickade på knappen');
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className={styles.button}
      title={title}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;

