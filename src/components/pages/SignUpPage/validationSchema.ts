import * as yup from 'yup';

export const generateValidationSchema = () => {
  return yup.object().shape({
    name: yup.string().required('User name is required!'),
    email: yup
      .string()
      .required('Email address is required!')
      .email('Email address is invalid!'),
    password: yup
      .string()
      .required('Password is required!')
      .min(8, 'Password must be at least 8 characters!'),
  });
};