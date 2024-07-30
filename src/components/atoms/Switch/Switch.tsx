/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SetStateAction } from "react";
import { Form, FormCheck } from "react-bootstrap";

type Props = {
    mode: string;
    setMode: React.Dispatch<SetStateAction<string>>;
}

export const Switch = ({mode, setMode}: Props) => {
    const changeMode = () => {
        if (mode === "Table") setMode("Card");
        else setMode("Table");
        console.log(mode)
    }

    return (
        <Form>
            <FormCheck css={switchStyle} id="mode" type="switch" label={mode} onClick={changeMode} />
        </Form>
    )
}

const switchStyle = css({
    color: 'white',
    marginRight: '5px',
})