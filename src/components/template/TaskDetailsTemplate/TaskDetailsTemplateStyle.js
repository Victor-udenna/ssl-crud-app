import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const TaskDetailsTemplateStyle = styled.div`
  .task {
    position: relative;
    padding-top: 150px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 42px;
  }

  .task-priority {
    display: flex;
    align-items: center;
    gap: 10px;

    .task-priority__title {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      text-align: left;
    }

    .task-priority__value {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      text-align: left;
      padding: 4px 8px;
      border-radius: 4px;
      display: inline-block;
    }

    .task-priority__value.Low {
      background-color: #d4edda;
      color: #155724;
    }

    .task-priority__value.Medium {
      background-color: #fff3cd;
      color: #856404;
    }

    .task-priority__value.High {
      background-color: #f8d7da;
      color: #721c24;
    }
  }

  .task-date__card {
    border-left: 1px solid #5f5f5f;
    padding-bottom: 40px;
  }

  .task-date__card:last-child {
    border-left: none;
  }

  .task-card__header-text {
    font-size: 14px;
  }

  .task-card-title {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: -15.5px;
  }

  .details-header__back__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0px 12px;
    height: 50px;
    width: 60px;
    background-color: #f2f0f0;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      width: 22px;
      height: 22px;
    }
  }

  .task-details__footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;
  }

  .task-card__status {
    position: relative;
  }

  .task-delete__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0px 12px;
    height: 50px;
    width: 60px;
    background-color: #f2f0f0;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      width: 22px;
      height: 22px;
    }
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

  @media screen and (min-width: 1280px) {
  }
`;

export default TaskDetailsTemplateStyle;
