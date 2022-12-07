import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Field from "../../components/Field";
import Input from "../../components/Input";
import Label from "../../components/Label";

const PopupLoginStyles = styled.div`
  width: 590px;
  height: 752px;
  border-radius: 6px;
  background: #999595;
  position: relative;
  top: 50%;
  right: -55%;
  transform: translateY(-45%);
  border: 3px solid #fbbc1a;
  .avatar-login {
    padding: 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #999595;
    border-radius: 50%;
    border: 3px solid #fbbc1a;
  }
  .popup-login-form {
    padding: 140px 80px;
  }
`;
const PopupLogin = () => {
  return (
    <PopupLoginStyles>
      <div className="avatar-login">
        <img src="/images/icon/image-1abc.svg" alt="" />
      </div>
      <form className="popup-login-form">
        <Field marginBottom="70px">
          <Label htmlFor="username">
            <img src="/images/icon/image2.jpg" alt="icon" />
          </Label>
          <Input type="text" name="username" placeholder="username"></Input>
        </Field>

        <Field marginBottom="24px">
          <Label htmlFor="password">
            <img src="/images/icon/icon-password.jpg" alt="icon" />
          </Label>
          <Input type="password" name="password" placeholder="password"></Input>
        </Field>

        <Field marginBottom="24px">
          <Input type="checkbox" name="remember-me"></Input>
          <Label htmlFor="remember-me">Remember me</Label>
        </Field>

        <Button>LOGIN</Button>
      </form>
    </PopupLoginStyles>
  );
};

export default PopupLogin;
