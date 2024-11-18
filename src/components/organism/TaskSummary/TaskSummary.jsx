import React from 'react';
import Text from '../../atoms/Text/Text';
import TaskSummaryStyle from './TaskSummaryStyle';

const TaskSummary = () => {
  return (
    <TaskSummaryStyle>
      <div className="container task-summary">
        <div className="task__summary-container">
          <div className="task__summary-card first">
            <Text value="Total Task" className="task__summary-card-title" />
            <Text value="100" className="task__summary-card-count" />
          </div>
          <div className="task__summary-card">
            <Text value="Completed Task" className="task__summary-card-title" />
            <Text value="0" className="task__summary-card-count" />
          </div>
          <div className="task__summary-card third">
            <Text value="Pending Task" className="task__summary-card-title" />
            <Text value="0" className="task__summary-card-count" />
          </div>
          <div className="task__summary-card">
            <Text value="Over due task" className="task__summary-card-title" />
            <Text value="0" className="task__summary-card-count" />
          </div>
        </div>
      </div>
    </TaskSummaryStyle>
  );
};

export default TaskSummary;
