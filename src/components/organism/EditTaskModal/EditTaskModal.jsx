import React, { useState, useEffect } from 'react';
import Button from '../../atoms/Button/Button';
import EditTaskModalStyle from './EditTaskModalStyle';
import closeIcon from '../../../assets/icons/close.svg';
import { addTaskToDb } from '../../../utils/indexedDbUtils';

const EditTaskModal = ({ onClose, task }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [priority, setPriority] = useState(task?.priority || 'Low');
  const [endDate, setEndDate] = useState(task?.endDate || '');

  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDescription(task.description || '');
      setPriority(task.priority || 'Low');
      setEndDate(task.endDate || '');
    }
  }, [task]);

  const handleChange = (field, value) => {
    if (field === 'title') setTitle(value);
    if (field === 'description') setDescription(value);
    if (field === 'priority') setPriority(value);
    if (field === 'endDate') setEndDate(value);
  };

  const handleSave = async () => {
    const updatedTask = {
      ...task,
      title,
      description,
      priority,
      endDate,
    };

    try {
      await addTaskToDb(updatedTask);
      window.location.reload();
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  return (
    <EditTaskModalStyle>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="header">
            <h3>Edit Task</h3>
            <Button onClick={onClose} className="close-button" imageAlt="Close Icon" imageSrc={closeIcon} />
          </div>
          <form className="form">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => handleChange('title', e.target.value)} />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
            <label htmlFor="priority">Priority</label>
            <select id="priority" value={priority} onChange={(e) => handleChange('priority', e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" value={endDate} onChange={(e) => handleChange('endDate', e.target.value)} />
            <button type="button" className="button" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </EditTaskModalStyle>
  );
};

export default EditTaskModal;
