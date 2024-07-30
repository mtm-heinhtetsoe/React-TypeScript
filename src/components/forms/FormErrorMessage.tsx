import { get, useFormContext } from "react-hook-form";
import { color } from "../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


type Props = {
    name?: string;
    className?: string;
    visibleOnTouch?: boolean;
    visibleCondition?: (error: any, isTouched: boolean, errors: any) => boolean;
};

export const FormErrorMessage =  ({name, className, visibleOnTouch = true, visibleCondition}: Props) => {
    const { formState } = useFormContext();
    const { touchedFields, errors } = formState;

    const isTouched = !!get(touchedFields, name, false)
    const error = get(errors, name, {})

    const isShow = visibleOnTouch ? isTouched : (visibleCondition && visibleCondition(error, isTouched, errors)) || true;

    return isShow ? (
        <p css={container} className={className} >{error.message}</p>
    ) : null;
};

const container = css({
    color: color.red,
    marginTop: 5,
    whiteSpace: 'nowrap',
    fontSize: 12,
});
