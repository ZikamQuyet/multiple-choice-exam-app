import React, { HtmlHTMLAttributes } from "react";
import { DropdownStyles } from "./DropdownStyles.styled";

export interface IDropdown extends HtmlHTMLAttributes<HTMLSelectElement> {
  height?: string;
  width?: string;
}

const Dropdown: React.FC<IDropdown> = ({ height, width, ...rest }) => {
  return (
    <DropdownStyles height={height} width={width} {...rest}>
      <option value="difficult">Difficult</option>
    </DropdownStyles>
  );
};

export default Dropdown;
