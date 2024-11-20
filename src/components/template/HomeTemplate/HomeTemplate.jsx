import React, { useState, useEffect } from 'react';
import HomeTemplateStyle from './HomeTemplateStyle';
import Header from '../../organism/Header/Header';
import TaskSummary from '../../organism/TaskSummary/TaskSummary';
import TaskCard from '../../organism/TaskCard/TaskCard';
import Text from '../../atoms/Text/Text';
import CreateTaskModal from '../../organism/CreateTaskModal/CreateTaskModal';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../../../redux/taskSlice';
import { useNavigate } from 'react-router-dom';
import FetchLoading from '../../organism/FetchLoading/FetchLoading';
import EmptyState from '../../molecule/EmptyState/EmptyState';

const HomeTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks, status } = useSelector((state) => state.tasks);
  const [isAddmodal, setIsAddmodal] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [selectedPriority, setSelectedPriority] = useState('All');
  const openAddTaskModal = () => {
    setIsAddmodal(true);
  };

  const closeAddTaskModal = () => {
    setIsAddmodal(false);
  };

  const handleSearchChange = (searchValue) => {
    const filtered = tasks.filter((task) => task.title.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredTasks(filtered);
  };

  const handleFilterChange = (priority) => {
    setSelectedPriority(priority);
    setFilteredTasks(priority === 'All' ? tasks : tasks.filter((task) => task.priority === priority));
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  if (status === 'loading') {
    return <FetchLoading />;
  }

  const gotoDetails = (id) => {
    navigate(`/task-details/${id}`);
  };

  return (
    <HomeTemplateStyle>
      {isAddmodal && (
        <CreateTaskModal
          onClose={() => {
            closeAddTaskModal();
          }}
        />
      )}
      <Header
        onAddClick={openAddTaskModal}
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        selectedPriority={selectedPriority}
      />
      <TaskSummary />
      <section className="container main-content">
        <div className="sort-header">
          <Text className="sort-title" value={'Sorted by:'} />
          <Text className="sort-value" value={selectedPriority} />
        </div>
        {filteredTasks.length == 0 ? (
          <EmptyState />
        ) : (
          <div className="task-container">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                onClick={() => {
                  gotoDetails(task?.id);
                }}
                task={task}
              />
            ))}
          </div>
        )}
      </section>
    </HomeTemplateStyle>
  );
};

export default HomeTemplate;
