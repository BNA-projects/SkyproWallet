import * as S from "./AuthForm.styled";
import { signIn, signUp } from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../const";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { validateEmptyFields } from "../../Validators/validateEmptyFields";
import { validateLoginErrors } from "../../Validators/authValidator";

function AuthForm({ isSignUp }) {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  const initialValues = isSignUp
    ? { name: "", login: "", password: "" }
    : { login: "", password: "" };

  const {
    formData,
    focus,
    errors,
    handleChange,
    handleFocus,
    handleBlur,
    validateForm,
  } = useForm({
    initialValues,
    validate: (values) => {
      const requiredFields = Object.keys(initialValues);
      const { hasEmpty, errors: emptyErrors } = validateEmptyFields(
        values,
        requiredFields
      );
      if (hasEmpty) {
        toast.error("Все поля должны быть заполнены");
        return { isValid: false, newErrors: emptyErrors };
      }

      const { isValid, errors: fieldErrors } = validateLoginErrors(values);
      return { isValid, newErrors: fieldErrors };
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        if (isSignUp) {
          navigate(RoutesApp.SIGN_IN);
        } else {
          updateUserInfo(data);
          navigate(RoutesApp.MAIN);
        }
      }
    } catch (err) {
      toast.error(err.message || "Что-то пошло не так");
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlok>
            <div>
              <S.Title>{isSignUp ? "Регистрация" : "Вход"}</S.Title>
            </div>
            <S.Form onSubmit={handleSubmit}>
              {isSignUp && (
                <S.InputAuthForm
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  $isFocused={focus.name}
                  $error={errors.name}
                />
              )}

              <S.InputAuthForm
                // type="email"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Эл. почта"
                onFocus={() => handleFocus("login")}
                onBlur={() => handleBlur("login")}
                $isFocused={focus.login}
                $error={errors.login}
              />
              <S.InputAuthForm
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                $isFocused={focus.password}
                $error={errors.password}
              />
              <S.AuthButton
                type="submit"
                // Блокировка кнопки, если есть хоть одна ошибка
                disabled={Object.values(errors).some((err) => err)}
              >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </S.AuthButton>
              <S.TextGroep>
                {isSignUp && (
                  <>
                    <S.ModalText>Уже есть аккаунт?</S.ModalText>
                    <S.ModalLink to={RoutesApp.SIGN_IN}>
                      Войдите здесь
                    </S.ModalLink>
                  </>
                )}
                {!isSignUp && (
                  <>
                    <S.ModalText>Нужно зарегистрироваться?</S.ModalText>
                    <S.ModalLink to={RoutesApp.SIGN_UP}>
                      Регистрируйтесь здесь
                    </S.ModalLink>
                  </>
                )}
              </S.TextGroep>
            </S.Form>
          </S.ModalBlok>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}

export default AuthForm;
