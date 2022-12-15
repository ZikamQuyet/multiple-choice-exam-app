import styled from "styled-components";

export const DashboardHeadMobileStyles = styled.div`
  position: fixed;
  width: 100%;
  display: none;
  background: ${(props) => props.theme.gray54};
  padding: 10px;
  z-index: 999;
  h3 {
    color: #fff;
  }
  img {
    display: inline;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;