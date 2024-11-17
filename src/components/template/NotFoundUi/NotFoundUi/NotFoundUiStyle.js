import styled from 'styled-components';

const NotFoundUiStyle = styled.div`
  .not-found-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #ffffff;
  }

  .error-title {
    font-size: 5rem;
    color: #000000;
    margin: 0;
  }

  .error-message {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .home-link {
    font-size: 1.25rem;
    color: #0070f3;
    text-decoration: none;
    border: 2px solid #0070f3;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0070f3;
      color: #fff;
    }
  }
`;

export default NotFoundUiStyle;
