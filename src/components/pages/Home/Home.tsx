import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Demo } from "../../Demo";

export const Home = () => {
    return (
        <div css={home}>
            <h1 css={title}>React TypeScript</h1> 
        </div>
    )
}

const home = css({
    backgroundColor: '#021526',
    color: 'white',
    padding: 10,
    minHeight: '100vh',
    textAlign: 'center'
});

const title = css({
    fontSize: '70px',
    fontWeight: 'bold',
})
