import React from 'react';
import { useSelector } from 'react-redux';
import Text from '../../atoms/Text/Text';
import TaskSummaryStyle from './TaskSummaryStyle';

const TaskSummary = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
  const pendingTasks = tasks.filter((task) => task.status === 'To Do').length;

  const overdueTasks = tasks.filter(
    (task) => task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'Completed'
  ).length;

  return (
    <TaskSummaryStyle>
      <div className="container task-summary">
        <div className="task__summary-container">
          <div className="task__summary-card first">
            <Text value="Total Task" className="task__summary-card-title" />
            <Text value={totalTasks} className="task__summary-card-count" />
          </div>
          <div className="task__summary-card">
            <Text value="Completed Task" className="task__summary-card-title" />
            <Text value={completedTasks} className="task__summary-card-count" />
          </div>
          <div className="task__summary-card third">
            <Text value="Pending Task" className="task__summary-card-title" />
            <Text value={pendingTasks} className="task__summary-card-count" />
          </div>
          <div className="task__summary-card">
            <Text value="Overdue Task" className="task__summary-card-title" />
            <Text value={overdueTasks} className="task__summary-card-count" />
          </div>
        </div>
      </div>
    </TaskSummaryStyle>
  );
};

export default TaskSummary;
