import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  height?: string;
  placeholder?: string;
}

const InputStyles = styled.input<IInput>`
  height: ${(props) => props.height};
  padding: 12px 41px;
  background: #f3f1f1;
`;

const Input: React.FC<IInput> = ({
  height,
  placeholder,
  name,
  type = "text",
}) => {
  return (
    <InputStyles
      height={height}
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
    ></InputStyles>
  );
};
export default Input;
