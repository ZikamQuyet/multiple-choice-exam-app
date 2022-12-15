import styled from "styled-components";

export const ExamStyles = styled.div`
  min-height: 100vh;
  display: flex;
  .question-content {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  .btn-go {
    display: none;
  }
  .user-info {
    display: none;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    .question-content {
      width: 100%;
    }
    .user-info {
      z-index: 9999;
    }
  }
`;
