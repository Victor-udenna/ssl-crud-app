import React, { useState } from 'react';
import TaskCardStyle from './TaskCardStyle';
import Button from '../../atoms/Button/Button';
import arrowDown from '../../../assets/icons/arrow-down.svg';

const TaskCard = () => {
  const [status, setStatus] = useState('Todo');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setDropdownOpen(false);
  };

  return (
    <TaskCardStyle>
      <div className="task-card">
        <div className="task-card__header">
          <h3>{'Design Portfolio'}</h3>
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
        <div className="task-card__footer">
          <p>
            Priority: <span className="task-card__priority low">{'Low'}</span>
          </p>
          <p>
            Due Date: <span className="task-card__duedate">{'11/04/2023'}</span>
          </p>
        </div>
      </div>
    </TaskCardStyle>
  );
};

export default TaskCard;
