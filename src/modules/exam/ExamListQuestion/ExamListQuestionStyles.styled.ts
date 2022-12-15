import styled from "styled-components";

export const ExamListQuestionStyles = styled.div`
  width: 30%;
  padding: 3rem 2rem;
  background: ${(props) => props.theme.primary};
  border: 1px solid rgba(0, 0, 0, 0.5);
  z-index: 9999;
  .exam-list-question-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .question-tags {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: .75rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: unset;
    padding: unset;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    .exam-list-question-content {
      width: 80%;
      padding: 2rem;
      background: ${(props) => props.theme.primary};
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .question-tags {
      overflow: scroll;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    .question-tags {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: .5rem;
    }
  }
`;
