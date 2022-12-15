import React from "react";
import PopupLogin from "../../modules/PopupLogin";
import { LoginStyles } from "./LoginStyles.styled";

const Login: React.FC = () => {
  return (
    <LoginStyles>
      <PopupLogin />
    </LoginStyles>
  );
};

export default Login;
