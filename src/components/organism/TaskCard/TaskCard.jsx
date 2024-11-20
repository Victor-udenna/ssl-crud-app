import React, { useState } from 'react';
import TaskCardStyle from './TaskCardStyle';
import Button from '../../atoms/Button/Button';
import arrowDown from '../../../assets/icons/arrow-down.svg';
import { addTaskToDb } from '../../../utils/indexedDbUtils';
import { updateTask } from '../../../redux/taskSlice';

import { useDispatch } from 'react-redux';

const TaskCard = ({ task, onClick }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(task?.status);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleStatusChange = async (newStatus) => {
    const updatedTask = { ...task, status: newStatus };

    try {
      await addTaskToDb(updatedTask);
      dispatch(updateTask(updatedTask));
      setStatus(newStatus);
      setDropdownOpen(false);
      window.location.reload();
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  return (
    <TaskCardStyle>
      <div className="task-card">
        <div className="task-card__header">
          <h3 onClick={onClick}>{task?.title}</h3>
          <div className="task-card__status">
            <Button
              textValue={status}
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!isDropdownOpen);
              }}
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
        <div onClick={onClick} className="task-card__footer">
          <p>
            Priority: <span className={`task-card__priority ${task?.priority}`}>{task?.priority}</span>
          </p>
          <p>
            Due Date: <span className="task-card__duedate">{task?.endDate}</span>
          </p>
        </div>
      </div>
    </TaskCardStyle>
  );
};

export default TaskCard;
