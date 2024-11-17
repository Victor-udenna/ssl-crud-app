import React from 'react';
import InputStyle from './InputStyle';

const Input = (placeholder, value, onChange, className, id, type = 'text') => {
  return (
    <InputStyle>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className={`input ${className}`}
      />
    </InputStyle>
  );
};

export default Input;
