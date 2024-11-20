import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const EditTaskModalStyle = styled.div`
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
  }

  .modal-content {
    background: #fff;
    width: 100%;
    max-width: 500px;
    height: 95dvh;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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
        cursor: pointer;
        height: 48px;
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

export default EditTaskModalStyle;
