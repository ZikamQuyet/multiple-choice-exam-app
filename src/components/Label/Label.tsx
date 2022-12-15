import React, { LabelHTMLAttributes } from "react";
import { LabelStyles } from "./LabelStyles.styled";
export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  children: any;
  width?: string;
  marginLeft?: string;
  marginRight?: string;
  fontWeight?: number;
}

const Label: React.FC<ILabel> = ({
  marginLeft,
  fontWeight,
  marginRight,
  children,
  ...rest
}) => {
  return (
    <LabelStyles
      fontWeight={fontWeight}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...rest}
      // style={{ width: `${typeof children !== "string" ? "20%" : ""}` }}
    >
      {children}
    </LabelStyles>
  );
};

export default Label;
