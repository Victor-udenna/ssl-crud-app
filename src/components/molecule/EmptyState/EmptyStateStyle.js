import styled from 'styled-components';

const EmptyStateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 42px;
  color: #555;

  h2 {
    font-size: 24px;
    margin: 0 0 8px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #777;
  }
`;

export default EmptyStateStyle;
