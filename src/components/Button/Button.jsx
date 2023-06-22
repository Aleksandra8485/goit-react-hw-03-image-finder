import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, disabled }) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
};

export default Button;
