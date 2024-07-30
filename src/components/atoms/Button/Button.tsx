import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "../../../styles/theme";


type Props = JSX.IntrinsicElements['button'] & {
    name?: string;
    variant?: 'contained' | 'outlined';
    children?: any;
}

export const Button = ({name, variant, children}: Props) => {
    return <button name={name} css={variant === 'outlined' ? outlined : base}>{children}</button>
}

const base = css({
    fontWeight: 400,
    color: color.darkTangerine,
    backgroundColor: color.white,
    cursor: 'pointer',
    borderRadius: 10,
    padding: '10px 40px',
    border: '1px solid' + color.darkTangerine,
  
    '&:hover': {
      opacity: 0.8,
    },
  
    '&:disabled': {
      opacity: 0.8,
      cursor: 'not-allowed',
    },
  });
  
  const outlined = css(base, {
    backgroundColor: color.darkTangerine,
    color: color.white,
    borderColor: color.darkTangerine,
  });