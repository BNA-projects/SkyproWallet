import styled from "styled-components";
import { textSizes } from "../../const";

export const SMain = styled.main`
  background: rgb(244, 245, 246);
  padding-left: 118px;
  padding-right: 120px;
  padding-bottom: 72px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
`;
export const SMainHeader = styled.h1`
  font-size: ${textSizes.largeH1.fontSize};
  font-weight: ${textSizes.largeH1.fontWeight};
  color: ${textSizes.largeH1.color};
  padding-top: 36px;
  padding-bottom: 25px;
  margin: 0px;
`;

export const STables = styled.div`
  display: flex;
  gap: 34px;
  width: 100%;
  max-width: 1200px;
`;

export const STableSection = styled.div`
  width: 789px;
  height: 618px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const STableHeader = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 32px;
  align-items: center;
  justify-content: space-between;
  margin-right: 34px;
`;

export const SSectionTitle = styled.h2`
  font-weight: ${textSizes.largeH2.fontWeight};
  font-size: ${textSizes.largeH2.fontSize};
  margin-left: 32 px;
`;

export const STableBodyWrapper = styled.div`
  margin-bottom: 32px;
  display: block;
  max-height: 618px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;
export const SExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  label {
    font-weight: ${textSizes.medium.fontWeight};
    font-size: ${textSizes.medium.fontSize};
  }
`;
