import styled from "styled-components";

export const DashboardContentStyles = styled.div`
  width: 80%;
  padding: 1.5rem 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 4.25rem;
    width: 100%;
    padding: 1rem 0.5rem;
  }
`;
