import styled from "styled-components";

export const TestStyles = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  h3 {
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .time-achievements,
  .time,
  .achievements,
  .start {
    display: flex;
    align-items: center;
  }
  .time-achievements {
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
  .time,
  .achievements {
    gap: 0.5rem;
  }
  .start {
    gap: 0.25rem;
  }
`;
