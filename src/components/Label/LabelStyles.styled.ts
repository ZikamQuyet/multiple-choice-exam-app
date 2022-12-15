import { ILabel } from './Label';
import styled from "styled-components";

export const LabelStyles = styled.label<ILabel>`
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-weight: ${(props) => props.fontWeight};
  width: ${(props) => props.width};
  cursor: pointer;
`;