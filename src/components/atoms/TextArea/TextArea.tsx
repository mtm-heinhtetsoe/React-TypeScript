import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { color } from '../../../styles/theme';


type Props = JSX.IntrinsicElements['textarea'] & {
  isError?: boolean;
  touched?: boolean;
} 

const InnerTextAreaField = (
  props: Props,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) => {
  const { isError, touched, ...inputProps } = props;

  const styles =
    isError && touched ? touchedError : isError ? untouchedError : base;

  return <textarea css={styles} {...inputProps} ref={ref} />         
};

const base = css({
  width: '100%',
  height: 40,
  padding: '0 10px',
  borderWidth: 1,
  borderColor: color.darkTangerine,
  borderRadius: color.darkTangerine,
  outline: 0,
  
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

export const TextArea = React.forwardRef(InnerTextAreaField);