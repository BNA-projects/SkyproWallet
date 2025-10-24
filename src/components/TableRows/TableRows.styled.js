import styled from "styled-components";
import { textSizes } from "../../const";
import { getSelectedColor} from "../../utils/styledUtils";

const getTextStyles = () => `
  font-family: Montserrat;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  letter-spacing: 0px;

;
`;

export const RowHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 32px;
  padding: 7px 32px;
  border-bottom: 0.5px solid rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  ${getTextStyles()}
`;
export const Row = styled.div`
  width: 100%;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "rgba(219, 255, 233, 1)" : "transparent"};
  display: flex;
  align-items: center;
  padding: 7px 32px;
  box-sizing: border-box;
  gap: 32px;
  color: ${({ $isSelected }) => getSelectedColor($isSelected)};
  ${getTextStyles()}
`;

export const Cell = styled.div`
  width: 140px;
  font-size: 12px;
  line-height: 15px;
`;

export const Icons = styled.div`
  flex: 0 1 auto;
  display: flex;
  gap: 12px;
  justify-content: flex-start;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  filter: ${({ $isSelected }) =>
    $isSelected
      ? "brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(365%) hue-rotate(101deg) brightness(75%) contrast(80%)"
      : "transparent"};

  &:focus {
    outline: none;
  }

  img {
    display: block;
  }
`;
