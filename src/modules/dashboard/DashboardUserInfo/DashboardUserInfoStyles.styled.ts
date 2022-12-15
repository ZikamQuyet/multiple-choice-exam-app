import styled from "styled-components";

export const DashboardUserInfoStyles = styled.div`
  padding: 2rem 0;
  width: 20%;
  background: ${(props) => props.theme.primary};
  .dashboard-user-info-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: auto;
    padding: 2rem 1rem;
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
    background: rgba(0, 0, 0, 0.3);

    .dashboard-user-info-content {
      width: 50%;
      padding: 40px 0;
      background: ${(props) => props.theme.primary};
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .dashboard-user-info-content {
      padding: 2rem 0.5rem;
      width: 70%;
    }
  }
`;
