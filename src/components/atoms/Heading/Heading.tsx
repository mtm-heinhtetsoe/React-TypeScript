import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { color } from '../../../styles/theme';

type HeadingProps = {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
  fontFamily?: string;
};

export const Heading = ({
  headingLevel,
  className,
  children,
  fontFamily,
}: HeadingProps) => {
  const HeadingElement = headingLevel;
  return (
    <HeadingElement
      css={[baseHeadingStyle, { fontFamily: fontFamily }]}
      className={className}
    >
      {children}
    </HeadingElement>
  );
};

const baseHeadingStyle = css({
  color: color.darkTangerine,
  fontWeight: 400,
});