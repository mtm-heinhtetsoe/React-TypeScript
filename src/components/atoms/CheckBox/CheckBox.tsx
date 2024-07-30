import React from "react";
import { FormCheck } from "react-bootstrap";

type Props = JSX.IntrinsicElements['input'] & {
    label?: string;
}

const InnerCheckBox = (
    props: Props,
    ref: React.ForwardedRef<HTMLInputElement>
) => {
    return <FormCheck type="checkbox" label={props.label} ></FormCheck>
}

export const CheckBox = React.forwardRef(InnerCheckBox)
