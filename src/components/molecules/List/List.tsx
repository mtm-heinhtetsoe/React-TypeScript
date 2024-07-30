/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ListGroup } from "react-bootstrap";

type Props = {
    children: React.ReactNode;
  };

export const List = ({children}: Props) => {
    return (
        <ListGroup horizontal css={container}>
            {children}
        </ListGroup>
    )
}

const container = css({
    width: "1366px",
    margin: "10px auto",
})