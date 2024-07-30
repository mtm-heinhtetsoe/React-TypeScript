import React, { createRef, useState } from "react";
import { Row } from "../../molecules/Row/Row";
import { TextField } from "../../atoms/TextField/TextField";
import { general, resultColor } from "../../../enums";

export const Demo = (props : { id: number, title: string, word: string, link: string }) => {

    let inputRef: React.RefObject<HTMLInputElement> = createRef();

    const [values, setValues] = useState([
        {id: 0, value: '', color: '', reference: inputRef, disabled: false},
        {id: 1, value: '', color: '', reference: inputRef, disabled: false},
        {id: 2, value: '', color: '', reference: inputRef, disabled: false},
        {id: 3, value: '', color: '', reference: inputRef, disabled: false},
        {id: 4, value: '', color: '', reference: inputRef, disabled: false},
    ]);

    let id = 0;
    let answerKeys = props.word.split('');

    document.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            if(values.filter(v => v.color === '' && v.disabled === false && v.value !== '').length === 5) {
                showResult()
            }
        }
    })

    const showResult = () => {
        const newValues = values.map( newValue => {
            if (newValue.color === '' && newValue.disabled === false) {
                let i = 0;
                newValue.color = resultColor.WRONG_CHAR;
                if (answerKeys[i] === newValue.value) newValue.color = resultColor.CORRECT_POSITION;
                if (answerKeys[i] !== newValue.value && answerKeys.includes(newValue.value)) newValue.color = resultColor.WRONG_POSITION;
            }
            return newValue
        })

        setValues(newValues);
    }
    
    const handleChange = (e : any, id : number) => {
        const { value } = e.target;
        if (value.length <= 1) {
            // Update the value in state
            const newValues = values.map( newValue => {
                if(newValue.id === id) {
                    newValue.value = value;
                    if (value && id < values.length - 1) {
                        const nextInput = values.find( v => v.id = id+1);
                        if (nextInput) {
                            nextInput?.reference?.current?.focus();
                        }
                    }
                } 
                return newValue
            })
            
            setValues(newValues);
        }
    }

    return (
        <div>
            <h1>Theme: <a href={props.link}>{props.title}</a></h1>
            {Array.from({ length: general.rowCount }, (_, index) => (
                <Row key={index}>
                    {values.map( value => {
                        return (
                            <TextField key={id++}
                            disabled={value.disabled}
                            ref={value.reference}
                            onChange={(e) => handleChange(e, id)}>
                            </TextField>
                        )
                    })}
                </Row>
            ))}
        </div>
    )
}