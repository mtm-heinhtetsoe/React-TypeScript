/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
};

export const Row = ({ children }: Props) => {
  return (
    <div css={rowStyle}>
      {children}
    </div>
  );
};

const rowStyle = css({
  margin: '10px 0',
  width: '100%',
});