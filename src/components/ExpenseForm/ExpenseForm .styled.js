import styled from "styled-components";
import { textSizes } from "../../const";

import { Title, InputAuthForm, AuthButton } from "../AuthForm/AuthForm.styled";
import { inputColors } from "../../const";

export const TitleForm = styled(Title)`
  text-align: left;
`;

export const InputExpenseForm = styled(InputAuthForm)`
  margin-bottom: 24px;
  border-color: ${({ $error, $isFocused }) =>
    $error
      ? inputColors.error.border
      : $isFocused
      ? inputColors.active.border
      : inputColors.static.border};

  background: ${({ $error, $isFocused }) =>
    $error
      ? inputColors.error.background
      : $isFocused
      ? inputColors.active.background
      : inputColors.static.background};
`;

export const InputTitle = styled.p`
  text-align: left;
  margin-bottom: 16px;

  font-weight: ${textSizes.medium.fontWeight};
  font-size: ${textSizes.medium.fontSize};
`;

export const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
`;

export const ExpenseButton = styled(AuthButton)`
  margin-top: 0px;
  margin-bottom: 0px;

  background-color: ${(props) => (props.disabled ? "#b0b0b0" : "#4caf50")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;
