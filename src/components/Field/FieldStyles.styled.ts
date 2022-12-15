import { IField } from "./index";
import styled from "styled-components";

export const FieldStyles = styled.div<IField>`
  margin-bottom: ${(props) => props.marginBottom};
  display: flex;
`;
