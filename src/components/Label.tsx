import React from "react";
import styled from "styled-components";
interface ILabel {
  htmlFor: string;
  children: any;
}
const LabelStyles = styled.label`
  cursor: pointer;
`;
const Label: React.FC<ILabel> = ({ htmlFor, children }) => {
  if (typeof children === "string")
    return (
      <LabelStyles
        htmlFor={htmlFor}
        style={{ marginLeft: "10px", fontWeight: 700, fontSize: "20px" }}
      >
        {children}
      </LabelStyles>
    );
  return <LabelStyles htmlFor={htmlFor}>{children}</LabelStyles>;
};

export default Label;
