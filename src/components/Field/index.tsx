import React, { HtmlHTMLAttributes } from "react";
import { FieldStyles } from "./FieldStyles.styled";

export interface IField extends HtmlHTMLAttributes<HTMLElement> {
  marginBottom?: string;
  children: any;
}

const Field: React.FC<IField> = ({ marginBottom, children, ...rest }) => {
  return (
    <FieldStyles marginBottom={marginBottom} {...rest}>
      {children}
    </FieldStyles>
  );
};

export default Field;
