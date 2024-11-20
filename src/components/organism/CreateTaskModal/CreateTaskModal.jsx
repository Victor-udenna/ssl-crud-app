import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/taskSlice';
import Button from '../../atoms/Button/Button';
import { faker } from '@faker-js/faker';
import closeIcon from '../../../assets/icons/close.svg';
import CreateTaskModalStyle from './CreateTaskModalStyle';
import { addTaskToDb } from '../../../utils/indexedDbUtils';

const CreateTaskModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    priority: 'Low',
    endDate: '',
  });

  const taskId = faker.string.uuid();

  const handleChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    const { title, description, priority, endDate } = formState;
    if (!title.trim()) {
      alert('Title is required');
      return;
    }
    const newTask = {
      id: taskId,
      date_Created: Date.now(),
      title,
      description,
      priority,
      endDate,
      status: 'Todo',
    };
    await dispatch(addTask(addTaskToDb(newTask)));
    window.location.reload();
  };

  return (
    <CreateTaskModalStyle>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="header">
            <h3>Add Task</h3>
            <Button onClick={onClose} className="close-button" imageAlt="Close Icon" imageSrc={closeIcon} />
          </div>
          <form className="form">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={formState.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formState.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />

            <label htmlFor="priority">Priority</label>
            <select id="priority" value={formState.priority} onChange={(e) => handleChange('priority', e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={formState.endDate}
              onChange={(e) => handleChange('endDate', e.target.value)}
            />

            <button type="button" className="button" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </CreateTaskModalStyle>
  );
};

export default CreateTaskModal;
