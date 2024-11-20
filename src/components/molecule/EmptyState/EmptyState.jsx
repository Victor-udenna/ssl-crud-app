import React from 'react';
import Text from '../../atoms/Text/Text';
import EmptyStateStyle from './EmptyStateStyle';

const EmptyState = () => {
  return (
    <EmptyStateStyle>
      <h2>No Tasks</h2>
      <Text value={'Click the add button to add a task.'} />
    </EmptyStateStyle>
  );
};

export default EmptyState;
