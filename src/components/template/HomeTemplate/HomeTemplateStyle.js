import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const HomeTemplateStyle = styled.div`
  position: relative;

  .task-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    padding-bottom: 60px;
  }

  .main-content {
    padding-top: 100px;
  }

  .sort-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 32px;
  }

  .sort-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
  }

  .sort-value {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    color: ${Colors.neutralTxt};
  }

  @media screen and (min-width: 768px) {
    .task-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default HomeTemplateStyle;
