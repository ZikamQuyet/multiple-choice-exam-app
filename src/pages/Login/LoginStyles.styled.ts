import styled from "styled-components";

export const LoginStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  background-image: url("images/bg1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 0 .25rem;
  }
`;