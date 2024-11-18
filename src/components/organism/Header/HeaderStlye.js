import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const HeaderStyle = styled.header`
  box-shadow: 0px 12px 16px -4px #0c1a240a;
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 16px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: ${Colors.white};
    z-index: 10;
  }

  .header-search {
    border: 1px solid #d9d9d9;
    padding: 12px;
    width: 100%;
    border-radius: 12px;
    height: 50px;
    transition: all 0.3s ease;

    &::placeholder {
      color: #bfbfbf;
    }
  }

  .header-filter__button {
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

  .header-desktop__button {
    display: none;
  }

  .header-mobile__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    width: 70px;
    border: none;
    padding: 0px 12px;
    height: 50px;
    color: ${Colors.white};
    background-color: ${Colors.black};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 768px) {
    .header-desktop__button {
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

    .header-mobile__button {
      display: none;
    }
  }
`;

export default HeaderStyle;
