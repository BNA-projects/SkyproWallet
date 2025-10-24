import styled from "styled-components";
import { textSizes } from "../../const";
import { Link } from "react-router-dom";
import { BasisInput } from "../Input/Input.styled";
import { Button } from "../Button/Button.styled";
import { inputColors } from "../../const";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlok = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 32px;

  width: 100%;
  max-width: 380px;

  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: ${textSizes.largeH2.fontWeight};
  font-size: ${textSizes.largeH2.fontSize};
  line-height: 100%;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputAuthForm = styled(BasisInput)`
  margin-bottom: 12px;
  outline: none;
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

export const AuthButton = styled(Button)`
  margin-top: 12px;
  margin-bottom: 24px;
  background-color: ${(props) =>
    props.disabled ? "rgba(153, 153, 153, 1)" : "rgba(31, 164, 108, 1)"};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

export const TextGroep = styled.div`
  text-align: center;
`;

export const ModalText = styled.p`
  color: rgba(148, 166, 190, 0.4);
  font-weight: ${textSizes.small.fontWeight};
  font-size: ${textSizes.small.fontSize};
  line-height: 100%;
`;

export const ModalLink = styled(ModalText).attrs({ as: Link })`
  text-decoration: underline;
  margin-top: 4px;
`;
