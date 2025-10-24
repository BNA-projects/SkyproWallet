import { toast } from "react-toastify";

export const validateLoginErrors = (values) => {
  const errors = {};
  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(values.login)) {
    errors.login = true;
    toast.error("Введите корректный email");
    isValid = false;
  }

  if (values.password.length < 4) {
    errors.password = true;
    toast.error("Пароль должен быть не менее 4 символов");
    isValid = false;
  }

  return { isValid, errors };
};
