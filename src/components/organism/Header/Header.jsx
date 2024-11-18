import React, { useState } from 'react';
import HeaderStyle from './HeaderStlye';
import Button from '../../atoms/Button/Button';
import filterIcon from '../../../assets/icons/filtericon.svg';
import addIcon from '../../../assets/icons/add.svg';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <HeaderStyle>
      <div className="container header">
        <input className="header-search" placeholder="Search task.." type="search" />
        <Button className="header-filter__button" imageSrc={filterIcon} imageAlt="filter icon" />
        <Button className="header-desktop__button" textValue={'Create Task'} />
        <Button className="header-mobile__button" imageSrc={addIcon} imageAlt="add icon" />
      </div>
    </HeaderStyle>
  );
};

export default Header;
