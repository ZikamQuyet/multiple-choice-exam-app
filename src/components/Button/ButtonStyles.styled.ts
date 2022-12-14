import { IButton } from "./index";
import styled from "styled-components";

const ButtonStyles = styled.button<IButton>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  font-size: 20px;
  cursor: pointer;
  background: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border};
  /* text-decoration: none; */
`;

export default ButtonStyles;
