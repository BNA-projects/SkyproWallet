import styled from "styled-components";
import { textSizes } from "../../const";

export const Button = styled.button`
  width: 100%;
  height: 39px;
  border-radius: 6px;
  padding: 12px;
  background: rgba(31, 164, 108, 1);
  color: #fff;
  font-weight: ${textSizes.medium.fontWeight};
  font-size: ${textSizes.small.fontSize};
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;
