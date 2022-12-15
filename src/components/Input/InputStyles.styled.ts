import { IInput } from "./index";
import styled from "styled-components";

export const InputStyles = styled.input<IInput>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 0.75rem 1.5rem;
  flex: ${(props) => props.flex};
  background: ${(props) => props.theme.grayF3};
`;
