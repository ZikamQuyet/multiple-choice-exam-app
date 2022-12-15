import React, { InputHTMLAttributes } from "react";
import { useController } from "react-hook-form";
import { InputStyles } from "./InputStyles.styled";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  height?: string;
  width?: string;
  flex?: number;
  name: string;
  control?: any;
  id?: string;
  defaultValue?: string;
}



const Input: React.FC<IInput> = ({
  height,
  width,
  flex,
  control,
  name,
  id,
  defaultValue,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: defaultValue || "",
  });
  return (
    <InputStyles
      height={height}
      width={width}
      flex={flex}
      id={id || name}
      {...field}
      {...rest}
    ></InputStyles>
  );
};
export default Input;
