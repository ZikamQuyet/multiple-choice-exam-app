import styled from "styled-components";

const PopupLoginStyles = styled.div`
  position: relative;
  margin: 6rem 5rem 6rem 0;
  border-radius: 6px;
  background: ${(props) => props.theme.gray99};
  border: 3px solid #fbbc1a;

  .avatar-login {
    padding: 0.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${(props) => props.theme.gray99};
    border-radius: 50%;
    border: 3px solid #fbbc1a;
  }
  .popup-login-form {
    padding: 7rem 4rem;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 6rem auto;
    .popup-login-form {
      padding: 7rem 1rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    .popup-login-form {
      padding: 7rem 2rem;
    }
  }
`;

export default PopupLoginStyles;
