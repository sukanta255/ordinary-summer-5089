export const SignUpValidate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Minimum 8 digits Required";
  } else if (checkPassword(values.password)) {
    errors.password = "Password must include uppercase, lowercase, and numbers.";
  }

  if (!values.cpass) {
    errors.cpass = "Required";
  } else if (values.cpass.length < 8) {
    errors.cpass = "Minimum 8 digits Required";
  } else if (values.cpass !== values.password) {
    errors.cpass = "Password does not match";
  }

  return errors;
};

export const LoginValidate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Minimum 8 digits Required";
  } else if (checkPassword(values.password)) {
    errors.password = "Password must include uppercase, lowercase, and numbers.";
  }

  return errors;
};

const checkPassword = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return hasUppercase && hasLowercase && hasNumber;
};
