import styled from "styled-components";

export const ExamHeaderStyles = styled.div`
  padding: 20px 30px;
  background: ${(props) => props.theme.primary};
  border: 1px solid rgba(0, 0, 0, 0.5);
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  .all-time,
  .real-time {
    height: 1rem;
    border-radius: 4px;
  }
  .all-time {
    position: relative;
    width: 100%;
    background: ${(props) => props.theme.grayBA};
  }
  .real-time {
    position: absolute;
    width: 60%;
    top: 0;
    left: 0;
    background: #41c54e;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 1rem .5rem;
    margin-top: 4.25rem;
    h3 {
      display: none;
    }
  }
`;