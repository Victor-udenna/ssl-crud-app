import React from 'react';
import HomeTemplateStyle from './HomeTemplateStyle';
import Header from '../../organism/Header/Header';
import TaskSummary from '../../organism/TaskSummary/TaskSummary';
import TaskCard from '../../organism/TaskCard/TaskCard';
import Text from '../../atoms/Text/Text';

const HomeTemplate = () => {
  return (
    <HomeTemplateStyle>
      <Header /> <TaskSummary />
      <section className="container  main-content">
        <div className="sort-header">
          <Text className="sort-title" value={'Sorted by:'} />
          <Text className="sort-value" value={'All'} />
        </div>
        <div className="task-container">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </section>
    </HomeTemplateStyle>
  );
};

export default HomeTemplate;
