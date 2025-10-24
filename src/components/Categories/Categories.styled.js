import styled from "styled-components";
import { textSizes } from "../../const";
import { getImageFilter,getSelectedColor,getSelectedBackground } from "../../utils/styledUtils";

export const Tag = styled.span`
   background-color: ${({ $isSelected }) => getSelectedBackground($isSelected)};
  color:  ${({ $isSelected }) => getSelectedColor($isSelected)};
  border-radius: 30px;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 8px 20px 8px 20px;
  img {
    margin-right: 12px;
     filter: ${({ $isSelected }) => getImageFilter($isSelected)};
  }
`;
