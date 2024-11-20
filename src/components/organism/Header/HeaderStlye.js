import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const HeaderStyle = styled.header`
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 32px;
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

  .header-filter__dropdown {
    position: absolute;
    top: 20;
    right: 20;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    width: 120px;
    z-index: 10;
  }

  .header-filter__dropdown-item {
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
  }

  .header-filter__dropdown:hover {
    background-color: #f1f1f1;
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
