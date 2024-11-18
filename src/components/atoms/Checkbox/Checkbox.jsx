import React, { useState } from 'react';
import CheckBoxStyle from './CheckboxStyle';

const Checkbox = ({onClick}) => {
  const [check, setCheck] = useState < boolean > true;

  return (
    <CheckBoxStyle>
      <input type="checkbox" checked={check} onChange={() => setCheck(!check)} onClick={onClick} />
    </CheckBoxStyle>
  );
};

export default Checkbox;
