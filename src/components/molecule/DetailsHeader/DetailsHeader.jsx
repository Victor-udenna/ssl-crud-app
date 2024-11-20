import React from 'react';
import DetailsHeaderStyle from './DetailsHeaderStyle';
import Button from '../../atoms/Button/Button';
import backbtn from '../../../assets/icons/arrow_back.svg';
import { useNavigate } from 'react-router-dom';

const DetailsHeader = ({ onEditClick }) => {
  const navigate = useNavigate();
  return (
    <DetailsHeaderStyle>
      <div className="container details-header">
        <Button
          onClick={() => {
            navigate('/');
          }}
          className="details-header__back__button"
          imageSrc={backbtn}
        />
        <Button className="details-header__edit__button" textValue={'Edit Task'} onClick={onEditClick} />
      </div>
    </DetailsHeaderStyle>
  );
};

export default DetailsHeader;
