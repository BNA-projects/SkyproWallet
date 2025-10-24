import { toast } from "react-toastify";

export const validateExpenseErrors = (values) => {
  const errors = {};
  let isValid = true;

  if (values.name.length < 4) {
    errors.name = true;
    toast.error("Наименование расхода должно быть не менее 4 символов");
    isValid = false;
  }

  const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!dateRegex.test(values.date)) {
    errors.date = true;
    toast.error("Дата должна быть в формате ДД.ММ.ГГГГ");
    isValid = false;
  }

  if (isNaN(values.amount) || parseFloat(values.amount) <= 0) {
    errors.amount = true;
    toast.error("Введите корректную сумму больше 0");
    isValid = false;
  }

  return { isValid, errors };
};
