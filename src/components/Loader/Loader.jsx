import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <div className="loader">
      <TailSpin type="Oval" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default CustomLoader;
