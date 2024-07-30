/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    className?: string;
    href: string;
    css?: any;
    children: React.ReactNode;
}

export const TextLink = ({className, href, children}: Props) => {
    return <Link to={href} css={textStyle} className={className}>{children}</Link>
}

const textStyle = css({
    '&:hover': {
        opacity: 0.8,
    },
});