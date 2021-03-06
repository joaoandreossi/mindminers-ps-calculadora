import { useState, useEffect } from 'react'
import './InputRegular.css'

function InputRegular(props) {
    const [value, setValue] = useState('')

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const validateInput = () => {
        let string = value
        const regexMatchComma = /[,]/g
        const regexMatchAllBeforeNumber = /^[^0-9]*/

        if(props.name === 'code') {
            setValue(string)
        } else if(props.name === 'price' && string !== ''){
            string = string.replace(regexMatchComma, '.').replace(regexMatchAllBeforeNumber, '')
            string = parseFloat(string).toString()
            isNaN(string) ? setValue('') : setValue(string)
        }  else if(props.name === 'tax' && string !== ''){
            string = string.replace(regexMatchComma, '.').replace(regexMatchAllBeforeNumber, '')
            string = parseFloat(string).toString()
            isNaN(string) ? setValue('') : setValue(string)
        } else if(props.name === 'quantity' && string !== ''){
            string = string.replace(regexMatchComma, '.').replace(regexMatchAllBeforeNumber, '')
            string = parseInt(string).toString()
            isNaN(string) ? setValue('') : setValue(string)
        }
    }

    const parseValueBeforeSending = () => {
        if(props.name === 'price'){
            return parseFloat(value)
        } else if (props.name === 'tax'){
            return parseFloat(value)
        } else if (props.name === 'quantity'){
            return parseInt(value)
        } else {
            return value
        }
    }

    useEffect(() => {
        props.getInputValueFromChild(props.name, parseValueBeforeSending())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, props])

    return (
        <div className='input-regular'>
            <input className='input-regular__input' placeholder={props.placeholder} type='text' onChange={handleInput} value={value} onBlur={validateInput}></input>
        </div>
    )
}

export default InputRegular