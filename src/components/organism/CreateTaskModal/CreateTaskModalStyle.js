import styled, { keyframes } from 'styled-components';
import Colors from '../../../helpers/Colors';

const slideIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const CreateTaskModalStyle = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: end;
    justify-content: center;
    z-index: 1000;
    animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.6s ease-in-out;
  }

  .modal-content {
    background: #fff;
    width: 100%;
    max-width: 500px;
    height: 90dvh;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.6s ease-in-out;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        margin: 0;
        font-size: 1.5rem;
      }

      .close-button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #333;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 15px;

      label {
        font-size: 0.9rem;
        color: #555;
      }

      input,
      textarea,
      select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
      }

      textarea {
        resize: none;
        height: 80px;
      }

      .button {
        background-color: ${Colors.black};
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 1rem;
        height: 48px;
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal-content {
      background: #fff;
      width: 100%;
      max-width: 500px;
      border-radius: 8px;
      height: fit-content;
    }
  }
`;

export default CreateTaskModalStyle;
