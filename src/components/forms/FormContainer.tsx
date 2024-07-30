/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "../../styles/theme";

type Props = {
    children?: any;
    className?: string;
};

export const FormContainer = ({ children }: Props) => {
    return <div css={formContainer}>{children}</div>
}

const formContainer = css({
    width: 450,
    margin: '0 auto',
    borderRadius: 8,
    background: color.white,
    boxShadow:
        'rgba(17, 17, 26, 0.2) 0px 4px 16px, rgba(17, 17, 26, 0.2) 0px 8px 32px',
    padding: '40px 50px 50px 50px',
});