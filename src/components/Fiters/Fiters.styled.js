import styled from "styled-components";
import { textSizes } from "../../const";

export const STableFilters = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${textSizes.small.fontSize};
  gap: 24px;
`;

export const STableFiltersGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SSortLink = styled.a`
  color: #16a34a;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: ${textSizes.medium.fontWeight};
`;

export const SCategoryLink = styled.a`
  color: #16a34a;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: ${textSizes.medium.fontWeight};
`;

export const SCategoryFiltration = styled.div`
  width: 176px;
  position: absolute;
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
  border: 0.5px solid rgb(153, 153, 153);
  border-radius: 6px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
  top: 20px;
  right: 0px;
`;

export const SCategoryFiltrationElement = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 20px;
  border-radius: 30px;
  width: fit-content;
  background: ${(props) =>
    props.$isSelected ? "rgb(219, 255, 233)" : "rgb(244, 245, 246)"};
  color: ${(props) =>
    props.$isSelected ? "rgb(31, 164, 108)" : "rgb(0, 0, 0)"};

  > img {
    margin-right: 12px;
    filter: ${(props) =>
      props.$isSelected
        ? "brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(365%) hue-rotate(101deg) brightness(91%) contrast(87%)"
        : "brightness(0) saturate(100%)"};
  }
`;

export const SSorting = styled.div`
  width: 106px;
  position: absolute;
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
  border: 0.5px solid rgb(153, 153, 153);
  border-radius: 6px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
  top: 20px;
  right: 0px;
`;

export const SSortingElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 20px;
  border-radius: 30px;
  background: ${(props) =>
    props.$isSelected ? "rgb(219, 255, 233)" : "rgb(244, 245, 246)"};
  width: fit-content;
  color: ${(props) =>
    props.$isSelected ? "rgb(31, 164, 108)" : "rgb(0, 0, 0)"};
`;
