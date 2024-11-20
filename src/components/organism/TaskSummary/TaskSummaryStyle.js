import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const TaskSummaryStyle = styled.div`
  .task-summary {
    padding-top: 140px;
  }
  .task__summary-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  .task__summary-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    border-left: 1px solid ${Colors.neutral};
    height: 60px;
    gap: 8px;
  }

  .task__summary-card-count {
    font-size: 18px;
  }

  .task__summary-card-title {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    .task__summary-container {
      padding-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .task__summary-card {
      height: 80px;
      padding: 20px 30px;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column-reverse;
      flex-grow: 1;
      width: 25%;
      border-left: 3px solid ${Colors.neutral};
    }

    .task__summary-card.third {
      border-left: 3px solid ${Colors.neutral};
    }

    .task__summary-card-title {
      font-size: 14px;
      font-weight: 500;
      line-height: 16.42px;
      color: #545f7d;
      text-align: left;
    }

    .task__summary-card-count {
      font-size: 32px;
      font-weight: 600;
      line-height: 28.15px;
      text-align: left;
      color: ${Colors.black};
    }
  }
`;

export default TaskSummaryStyle;
