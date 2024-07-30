import { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { generateValidationSchema } from './validationSchema';
import { FormContainer } from '../../forms/FormContainer';
import { FormTitle } from '../../forms/FormTitle';
import { FormLabel } from '../../forms/FormLabel';
import { FormTextField } from '../../forms/FormTextField';
import { FormErrorMessage } from '../../forms/FormErrorMessage';
import { Button } from '../../atoms/Button/Button';
import { TextLink } from '../../atoms/TextLink/TextLink';
import { color } from '../../../styles/theme';
import { PAGE_URL } from '../../../enums/urls';

type Props = {
  onSubmit: (data: any) => void;
  success: any;
};

export const SignUpForm = (props: Props) => {
  const validationSchema = generateValidationSchema();

  const methods = useForm({
    // resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const { handleSubmit } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <FormContainer>
          <div css={formTitleContainer}>
            <FormTitle>Sign up to your account</FormTitle>
          </div>
          <form onSubmit={handleSubmit(props.onSubmit)}>
            {props.success && <p css={errorMessage}>{props.success}</p>}
            <div css={inputContainer}>
              <FormLabel>User Name</FormLabel>
              <FormTextField
                name="name"
                css={input}
                type="text"
                ref={inputRef}
                autoFocus
              />
              {/* <MaterialIcon name="personIcon" fontSize={24} css={iconStyle} /> */}
              <FormErrorMessage name="name" />
            </div>
            <div css={inputContainer}>
              <FormLabel>Email Address</FormLabel>
              <FormTextField name="email" css={input} type="email" autoFocus />
              {/* <MaterialIcon name="emailIcon" fontSize={24} css={iconStyle} /> */}
              <FormErrorMessage name="email" />
            </div>
            <div css={inputContainer}>
              <FormLabel>Password</FormLabel>
              <FormTextField
                name="password"
                css={input}
                type="password"
                autoFocus
              />
              {/* <MaterialIcon name="lockIcon" fontSize={24} css={iconStyle} /> */}
              <FormErrorMessage name="password" />
            </div>
            <Button variant="contained" css={loginButton} type="submit">
              Sign Up
            </Button>
            <p css={text}>
              Already have an account?{' '}
              <TextLink href={PAGE_URL.LOGIN} css={signUpText}>
                Login
              </TextLink>
            </p>
          </form>
        </FormContainer>
      </FormProvider>
    </>
  );
};

const loginButton = css({
  width: 350,
  borderRadius: 4,
  fontSize: 16,
  padding: '12px 40px',
  marginTop: 5,
});

const inputContainer = css({
  marginBottom: 25,
  position: 'relative',
});

const input = css({
  maxWidth: 350,
  width: '100%',
  height: 44,
  padding: '0 10px 0 50px',
  marginTop: 5,
  borderRadius: 4,
  position: 'relative',
  border: '1px solid' + color.silver,
  boxShadow:
    'inset 0 1px 2px rgba(203, 203, 210, 0.4), inset 0 0 10px 1000px #FFFEDB',
});

// const iconStyle = css({
//   position: 'absolute',
//   top: 39,
//   left: 8,
//   color: color.darkTangerine,
// });

const formTitleContainer = css({
  marginBottom: 45,
});

const signUpText = css({
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
});

const errorMessage = css({
  backgroundColor: color.venetianRed,
  borderColor: color.candyPink,
  color: color.cherryRed,
  textAlign: 'center',
  border: '1px solid',
  padding: 6,
  marginBottom: 20,
  borderRadius: 4,
  fontSize: 14,
  lineHeight: 2,
});

const text = css({
  textAlign: 'center',
  paddingTop: 10,
  lineHeight: 2,
});