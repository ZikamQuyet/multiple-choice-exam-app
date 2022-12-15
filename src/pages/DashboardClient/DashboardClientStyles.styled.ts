import styled from "styled-components";

export const DashboardClientStyles = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    height: auto;
  }
`;
