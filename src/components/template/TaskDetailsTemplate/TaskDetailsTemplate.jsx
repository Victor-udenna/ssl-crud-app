import React, { useState } from 'react';
import TaskDetailsTemplateStyle from './TaskDetailsTemplateStyle';
import DetailsHeader from '../../molecule/DetailsHeader/DetailsHeader';
import Text from '../../atoms/Text/Text';
import bulletImg from '../../../assets/icons/bullet.svg';
import Button from '../../atoms/Button/Button';
import arrowDown from '../../../assets/icons/arrow-down.svg';
import deleteIcon from '../../../assets/icons/bin.svg';

const TaskDetailsTemplate = () => {
  const [status, setStatus] = useState('Todo');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setDropdownOpen(false);
  };

  return (
    <TaskDetailsTemplateStyle>
      <div className="container">
        <DetailsHeader />
        <div className="task">
          <h2 className="task-details__title">Task title</h2>
          <Text
            className="task-details__desc"
            value={'kfdjndikdosoiejf didjdmcd ids dofjemkspddns djdfudnemd sisidnfkssish bdf ieens,kspaien jfdn'}
          />
          <div className="task-priority">
            <Text className="task-priority__title" value={'Priority:'} />
            <Text className="task-priority__value medium" value={'Medium'} />
          </div>

          <div className="container">
            <div className="task-date__card">
              <div className="task-card-title">
                <img alt="bullet icon" src={bulletImg} />
                <p className="task-card__header-text">{'Start Date: 30/02/20'}</p>
              </div>
            </div>
            <div className="task-date__card">
              <div className="task-card-title">
                <img alt="bullet icon" src={bulletImg} />
                <Text className="task-card__header-text" value={'End Date: 10/92/02'} />
              </div>
            </div>
          </div>

          <div className="task-details__footer">
            <Button className="task-delete__btn" imageSrc={deleteIcon} />
            <div className="task-card__status">
              <Button
                textValue={status}
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="task-card__status-button"
                imageSrc={arrowDown}
                position="right"
                imageAlt="Toggle dropdown"
              />
              {isDropdownOpen && (
                <div className="task-card__dropdown">
                  <div className="task-card__dropdown-item" onClick={() => handleStatusChange('To Do')}>
                    To Do
                  </div>
                  <div className="task-card__dropdown-item" onClick={() => handleStatusChange('In Progress')}>
                    In Progress
                  </div>
                  <div className="task-card__dropdown-item" onClick={() => handleStatusChange('Completed')}>
                    Completed
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </TaskDetailsTemplateStyle>
  );
};

export default TaskDetailsTemplate;
