import { useState, useEffect } from 'react'
import InputDate from '../InputDate/InputDate'
import InputRegular from '../InputRegular/InputRegular'
import InputDropdown from '../InputDropdown/InputDropdown'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'

import './Form.css'

function Form (props) {
    const [date, setDate] = useState(new Date())
    const [code, setCode] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [tax, setTax] = useState(0)
    const [operation, setOperation] = useState({})
    
    const [key, setKey] = useState(0)

    const getInputValueFromChild = (component, value) => {
        switch(component){
            case 'date':
                setDate(value)
                break
            case 'code':
                setCode(value.toUpperCase())
                break
            case 'type':
                setType(value)
                break
            case 'price':
                setPrice(value)
                break
            case 'quantity':
                setQuantity(value)
                break
            case 'tax':
                setTax(value)
                break
            default:
                break
        }
    }

    const checkIfInputIsEmpty = () => {
        if(date && code && type && price && quantity && tax){
            return false
        }

        return true
    }

    const reRenderChildComponents = () => {
        setKey(key + 1)
    }

    useEffect(() => {
        const json = {
            id: props.operationId,
            date: date,
            code: code,
            type: type,
            price: price,
            quantity: quantity,
            tax: tax
        }
        setOperation(json)
    }, [props.operationId, date, code, type, price, quantity, tax])

    return (
        <div className='stock-form'>
            <InputDate name='date' placeholder='Data' getInputValueFromChild={getInputValueFromChild} key={'date' + key}></InputDate>
            <InputRegular name='code' placeholder='Código da ação (ex. GME)' type='text' getInputValueFromChild={getInputValueFromChild} key={'code' + key}></InputRegular>
            <InputDropdown name='type' placeholder='Tipo' getInputValueFromChild={getInputValueFromChild} key={'type' + key}></InputDropdown>
            <InputRegular name='price' placeholder='Preço' type='number' getInputValueFromChild={getInputValueFromChild} key={'price' + key}></InputRegular>
            <InputRegular name='quantity' placeholder='Quantidade' type='number' integer getInputValueFromChild={getInputValueFromChild} key={'quantity' + key}></InputRegular>
            <InputRegular name='tax' placeholder='Taxa' type='number' getInputValueFromChild={getInputValueFromChild} key={'tax' + key}></InputRegular>
            <ButtonSubmit getNewOperationFromChild={props.getNewOperationFromChild} operation={operation} disabled={checkIfInputIsEmpty()} resetState={reRenderChildComponents}></ButtonSubmit>
        </div>
    )
}

export default Form