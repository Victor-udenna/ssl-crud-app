import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const DetailsHeaderStyle = styled.div`
  .details-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: ${Colors.white};
    z-index: 10;
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

  .details-header__edit__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    width: 150px;
    border: none;
    padding: 0px 12px;
    height: 48px;
    color: ${Colors.white};
    background-color: ${Colors.black};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export default DetailsHeaderStyle;
