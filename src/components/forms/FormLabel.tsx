import { css } from "@emotion/react";
import { color } from "../../styles/theme";

type Props = {
    className?: string;
    children?: any;
}

export const FormLabel = ({className, children}: Props) => {
    return <label css={label} className={className}>{children}</label>
};

const label = css({
    fontWeight: 600,
    fontSize: 12,
    color: color.darkBlueGray,
})