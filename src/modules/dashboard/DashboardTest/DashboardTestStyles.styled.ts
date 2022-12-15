import styled from "styled-components";

export const DashboardTestStyles = styled.div`
  padding: 2.5rem 4rem;
  background: ${(props) => props.theme.primary};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  border-radius: 4px;
  @media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0.5rem;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;
