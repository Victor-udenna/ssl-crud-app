import React from 'react';

const Button = ({textValue, imageSrc, onClick, className = '', position = 'left', imageAlt = ''}) => {
  return (
    <button className={className} onClick={onClick}>
      {position === 'left' && imageSrc && <img src={imageSrc} alt={imageAlt} />}
      {textValue && <span>{textValue}</span>}
      {position === 'right' && imageSrc && (
        <img src={imageSrc} alt={imageAlt} />
      )}
    </button>
  );
};

export default Button;
