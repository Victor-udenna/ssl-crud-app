import React from 'react';
import {Oval} from 'react-loader-spinner';


const LoadSpinner = (
  type,
  color = '#0C3B4D',
  height = 30,
  width = 30,
) => {
  return <Oval color={color} height={height} width={width}  />;
};

export default LoadSpinner;
