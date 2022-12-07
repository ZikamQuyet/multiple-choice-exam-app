import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IButton {
  type?: "button" | "submit" | undefined;
  to?: string;
  onClick?: any;
  children: any;
}

const ButtonStyles = styled.button`
  width: 100%;
  border-radius: 4px;
  padding: 10px 0;
  font-size: 20px;
  cursor: pointer;
  background: #d9d9d9;
`;

const Button: React.FC<IButton> = ({
  type,
  to,
  onClick = () => {},
  children,
}) => {
  if (to)
    return (
      <NavLink to={to}>
        <ButtonStyles type={type} onClick={onClick}>
          {children}
        </ButtonStyles>
        ;
      </NavLink>
    );
  return (
    <ButtonStyles type={type} onClick={onClick}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
