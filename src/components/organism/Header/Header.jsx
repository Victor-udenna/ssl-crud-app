import React, { useState } from 'react';
import HeaderStyle from './HeaderStlye';
import Button from '../../atoms/Button/Button';
import filterIcon from '../../../assets/icons/filtericon.svg';
import addIcon from '../../../assets/icons/add.svg';

const Header = ({ onAddClick, onSearchChange, onFilterChange }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const handlePriorityChange = (newPriority) => {
    onFilterChange(newPriority);
    setDropdownOpen(false);
  };

  return (
    <HeaderStyle>
      <div className="container header">
        <input
          className="header-search"
          placeholder="Search task.."
          type="search"
          value={searchValue}
          onChange={handleSearch}
        />
        <div className="header-filter">
          <Button
            className="header-filter__button"
            imageSrc={filterIcon}
            imageAlt="Filter icon"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <div className="header-filter__dropdown">
              <div className="header-filter__dropdown-item" onClick={() => handlePriorityChange('All')}>
                All
              </div>
              <div className="header-filter__dropdown-item" onClick={() => handlePriorityChange('High')}>
                High
              </div>
              <div className="header-filter__dropdown-item" onClick={() => handlePriorityChange('Medium')}>
                Medium
              </div>
              <div className="header-filter__dropdown-item" onClick={() => handlePriorityChange('Low')}>
                Low
              </div>
            </div>
          )}
        </div>
        <Button className="header-desktop__button" onClick={onAddClick} textValue={'Create Task'} />
        <Button className="header-mobile__button" imageSrc={addIcon} onClick={onAddClick} imageAlt="Add icon" />
      </div>
    </HeaderStyle>
  );
};

export default Header;
