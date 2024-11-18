import React from 'react';

const Text = ({value, onClick, className = ''}) => {
  return (
    <p onClick={onClick} className={className}>
      {value}
    </p>
  );
};

export default Text;
