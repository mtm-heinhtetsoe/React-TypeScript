import React from "react";
import { Demo as DemoOrg }  from '../organisms/Demo';
import { data } from '../../assets/data.js'

const InnerDemo = () => {
    return (
        <div>
            {/* <DemoOrg 
                id={data.id}
                title={data.title}
                word={data.word}
                link={data.link} /> */}
        </div>
    )
}

export const Demo = React.forwardRef(InnerDemo);