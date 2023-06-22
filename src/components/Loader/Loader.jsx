import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

const CustomLoader = () => {
  return (
    <div className={styles.loader}>
      <TailSpin
        className={styles.spinner}
        type="Oval"
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
  );
};

export default CustomLoader;
