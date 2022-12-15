import React, { ButtonHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import ButtonStyles from "./ButtonStyles.styled";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | undefined;
  width?: string;
  height?: string;
  padding?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  to?: string;
  onClick?: any;
  isLoading?: boolean;
  children: any;
}

const Button: React.FC<IButton> = ({
  type,
  width,
  height,
  padding = "10px 0",
  bgColor,
  border,
  borderRadius,
  to,
  onClick = () => {},
  children,
  isLoading,
  ...rest
}) => {
  if (to)
    return (
      <NavLink to={to} style={{ textDecoration: "none" }}>
        <ButtonStyles
          bgColor={bgColor}
          width={width}
          height={height}
          border={border}
          padding={padding}
          borderRadius={borderRadius}
          type={type}
          onClick={onClick}
          isLoading={isLoading}
          {...rest}
        >
          {children}
        </ButtonStyles>
      </NavLink>
    );
  return (
    <ButtonStyles
      bgColor={bgColor}
      height={height}
      width={width}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
