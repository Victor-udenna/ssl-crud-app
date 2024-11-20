import React, { useState, useEffect } from 'react';
import TaskDetailsTemplateStyle from './TaskDetailsTemplateStyle';
import DetailsHeader from '../../molecule/DetailsHeader/DetailsHeader';
import Text from '../../atoms/Text/Text';
import bulletImg from '../../../assets/icons/bullet.svg';
import Button from '../../atoms/Button/Button';
import arrowDown from '../../../assets/icons/arrow-down.svg';
import { useSelector, useDispatch } from 'react-redux';
import deleteIcon from '../../../assets/icons/bin.svg';
import EditTaskModal from '../../organism/EditTaskModal/EditTaskModal';
import { fetchTaskById, deleteTaskById } from '../../../redux/taskSlice';
import { useParams, useNavigate } from 'react-router-dom';
import FetchLoading from '../../organism/FetchLoading/FetchLoading';
import { addTaskToDb } from '../../../utils/indexedDbUtils';

const TaskDetailsTemplate = () => {
  const [taskStatus, setTaskStatus] = useState('Todo');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const { selectedTask, status } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch(fetchTaskById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedTask) {
      setTaskStatus(selectedTask.status);
    }
  }, [selectedTask]);

  const handleStatusChange = async (newStatus) => {
    setTaskStatus(newStatus);
    setDropdownOpen(false);

    const updatedTask = { ...selectedTask, status: newStatus };

    try {
      await addTaskToDb(updatedTask);
      dispatch(fetchTaskById(id));
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  const openEditTaskModal = () => setIsEditModal(true);
  const closeEditTaskModal = () => setIsEditModal(false);

  if (status === 'loading') {
    return <FetchLoading />;
  }

  const handleDelete = async () => {
    dispatch(deleteTaskById(selectedTask.id));
    await navigate('/');
  };

  return (
    <TaskDetailsTemplateStyle>
      {isEditModal && (
        <EditTaskModal
          onClose={() => {
            closeEditTaskModal();
          }}
          task={selectedTask}
        />
      )}
      <div className="container">
        <DetailsHeader
          onEditClick={() => {
            openEditTaskModal();
          }}
        />
        <div className="task">
          <h2 className="task-details__title">{selectedTask?.title || 'No title'}</h2>
          <Text className="task-details__desc" value={selectedTask?.description || 'No description'} />
          <div className="task-priority">
            <Text className="task-priority__title" value="Priority:" />
            <Text
              className={`task-priority__value ${selectedTask?.priority}`}
              value={selectedTask?.priority || 'No priority'}
            />
          </div>

          <div className="container">
            <div className="task-date__card">
              <div className="task-card-title">
                <img alt="bullet icon" src={bulletImg} />
                <p className="task-card__header-text">{`Start Date: ${selectedTask?.startDate || 'N/A'}`}</p>
              </div>
            </div>
            <div className="task-date__card">
              <div className="task-card-title">
                <img alt="bullet icon" src={bulletImg} />
                <Text className="task-card__header-text" value={`End Date: ${selectedTask?.endDate || 'N/A'}`} />
              </div>
            </div>
          </div>

          <div className="task-details__footer">
            <Button
              className="task-delete__btn"
              onClick={() => {
                handleDelete();
              }}
              imageSrc={deleteIcon}
            />
            <div className="task-card__status">
              <Button
                textValue={taskStatus}
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
