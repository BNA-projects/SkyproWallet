import styled from "styled-components";
import { textSizes } from "../../const";

export const BasisInput = styled.input`
  width: 100%;
  max-width: 313px;
  height: 39px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0 12px;
  border: 0.5px solid;
  outline: none;
  focus &::placeholder {
    color: rgba(148, 166, 190, 0.4);

    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
    opacity: 1;
  }
`;
