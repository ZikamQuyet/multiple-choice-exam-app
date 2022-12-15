import { IDropdown } from "./index";
import styled from "styled-components";

export const DropdownStyles = styled.select<IDropdown>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 0 1rem;
  border: 1px solid #000;
  cursor: pointer;
  option {
    width: 100%;
  }
`;
