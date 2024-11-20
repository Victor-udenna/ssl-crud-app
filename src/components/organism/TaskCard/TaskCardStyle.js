import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const TaskCardStyle = styled.div`
  .task-card {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    border: 1px solid #d9d9d9;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .task-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .task-card__status {
    position: relative;
  }

  .task-card__status-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.black};
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    text-align: left;
    width: 120px;
  }

  .task-card__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    width: 120px;
    z-index: 10;
  }

  .task-card__dropdown-item {
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
  }

  .task-card__dropdown-item:hover {
    background-color: #f1f1f1;
  }

  .task-card h3 {
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
  }

  .task-card__footer {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }

  .task-card__footer p {
    font-weight: bold;
  }

  .task-card__priority {
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
  }

  .task-card__priority.Low {
    background-color: #d4edda;
    color: #155724;
  }

  .task-card__priority.Medium {
    background-color: #fff3cd;
    color: #856404;
  }

  .task-card__priority.High {
    background-color: #f8d7da;
    color: #721c24;
  }
  .task-card__duedate {
    color: ${Colors.neutralTxt};
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    .task-card:hover {
      transform: scale(1.01);
    }
  }
`;

export default TaskCardStyle;
