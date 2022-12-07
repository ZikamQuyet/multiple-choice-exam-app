import React, { HtmlHTMLAttributes } from "react";
import styled from "styled-components";
interface IField extends HtmlHTMLAttributes<HTMLElement> {
  marginBottom?: string;
  children: any;
}
const FieldStyles = styled.div<IField>`
  margin-bottom: ${(props) => props.marginBottom};
  display: flex;
`;
const Field: React.FC<IField> = ({ marginBottom, children, ...rest }) => {
  return (
    <FieldStyles marginBottom={marginBottom} {...rest}>
      {children}
    </FieldStyles>
  );
};

export default Field;
