import React from 'react';
import DetailsHeaderStyle from './DetailsHeaderStyle';
import Button from '../../atoms/Button/Button';
import backbtn from '../../../assets/icons/arrow_back.svg';

const DetailsHeader = () => {
  return (
    <DetailsHeaderStyle>
      <div className="container details-header">
        <Button className="details-header__back__button" imageSrc={backbtn} />
        <Button className="details-header__edit__button" textValue={'Edit Task'} />
      </div>
    </DetailsHeaderStyle>
  );
};

export default DetailsHeader;
