/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Heading } from '../atoms/Heading/Heading';

type Props = {
  children?: string;
  className?: string;
};

export const FormTitle = ({ children }: Props) => {
  return (
    <Heading headingLevel="h2" fontFamily="Pacifico-Regular" css={heading}>
      {children}
    </Heading>
  );
};

const heading = css({
  fontSize: 30,
  textAlign: 'center',
});