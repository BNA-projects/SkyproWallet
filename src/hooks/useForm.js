import { useState } from "react";


export const useForm = ({ initialValues, validate }) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState(
    Object.fromEntries(Object.keys(initialValues).map((key) => [key, false]))
  );
  const [focus, setFocus] = useState(
    Object.fromEntries(Object.keys(initialValues).map((key) => [key, false]))
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleFocus = (field) => {
    setFocus((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocus((prev) => ({ ...prev, [field]: false }));
    // validateForm();
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  };

  const validateForm = () => {
    const { isValid, newErrors} = validate(formData);
   
      const fullErrors = Object.fromEntries(
    Object.keys(formData).map((key) => [key, !!newErrors[key]])
  );

  setErrors(fullErrors);

    return isValid;
  };

  return {
    formData,
    setFormData,
    errors,
    focus,
    handleChange,
    handleFocus,
    handleBlur,
    validateForm,
    resetForm,
  };
};
