export const validateEmptyFields = (values, requiredFields) => {
  const errors = {};
  let hasEmpty = false;

  requiredFields.forEach((field) => {
    if (!values[field]?.trim()) {
      errors[field] = true;
      hasEmpty = true;
    }
  });

  return { hasEmpty, errors };
};
