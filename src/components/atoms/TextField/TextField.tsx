import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { color } from '../../../styles/theme';

type Props = JSX.IntrinsicElements['input'] & {
  isError?: boolean;
  touched?: boolean;
};

const InnerTextField = (
  props: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const { isError, touched, ...inputProps } = props;

  const styles =
    isError && touched ? touchedError : isError ? untouchedError : base;

  return <input css={styles} type="text" {...inputProps} ref={ref} />;
};

const base = css({
  width: '100%',
  height: 40,
  padding: '0 10px',
  borderWidth: 1,
  borderColor: color.darkTangerine,
  borderRadius: color.darkTangerine,
  outline: 0,

  '::placeholder': { color: color.grey },
  '&:focus': {
    borderWidth: 1,
    borderColor: color.darkTangerine,
  },
});

const untouchedError = css(base, {
  background: color.darkTangerine,
});

const touchedError = css(base, {
  borderWidth: 1,
  borderColor: color.darkTangerine,
  background: color.darkTangerine,
});

export const TextField = React.forwardRef(InnerTextField);
