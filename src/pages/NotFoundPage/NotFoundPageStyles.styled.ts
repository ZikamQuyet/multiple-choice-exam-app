import styled from "styled-components";

export const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.secondary};
  p {
    margin-bottom: 1.5rem;
  }
  .content {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.theme.primary};
    font-weight: 700;
    font-size: 1.2rem;
    border-radius: 2rem;
  }
`;
