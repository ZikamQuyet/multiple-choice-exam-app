import styled from "styled-components";

export const ExamFinishStyles = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .exam-finish-content {
    padding: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    background-color: #d9d9d9;
  }
  .exam-finish-info,
  .item-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .exam-finish-info {
    margin: 2rem 0;
    gap: 12.5rem;
  }
  .item-info {
    gap: 5rem;
  }
  button {
    margin: 0 auto;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 10px;
    .exam-finish-info {
      flex-wrap: wrap;
      gap: 2.5rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    padding: .5rem;
  }
`;