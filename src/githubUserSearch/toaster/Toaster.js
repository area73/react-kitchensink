import React from 'react';

import toaster from './toaster.module.scss';

const Toaster = (props) => {
  const errorClass = `${toaster.error} ${props.data.statusText ?  toaster.show: toaster.hide }`;
  return (
    <div className={toaster.toaster}><span className={errorClass}>{props.data.statusText}</span></div>
  );
};
export default Toaster;
