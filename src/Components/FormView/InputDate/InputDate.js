import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'

import './InputDate.css'
import './Calendar.css'

function InputDate(props) {
    const [toggleCalendar, setToggleCalendar] = useState(false)
    const [dateValue, setDateValue] = useState(new Date())

    //this is necessary otherwise the calendar closes before updating the date
    const hideCalendar = () => {
        parseDate(dateValue)
        setTimeout(() => {setToggleCalendar(!toggleCalendar)}, 10)
    }

    const parseDate = () => {
        const options = {day: 'numeric', month: 'numeric', year: 'numeric'}
        return dateValue.toLocaleDateString('pt-BR', options)
    }

    useEffect(() => {
        props.getInputValueFromChild(props.name, dateValue)
    }, [dateValue, props])

    return (
        <div className='input-date'>
            <input 
                className='input-date__input' 
                placeholder={props.placeholder} 
                type='text' 
                onClick={() => setToggleCalendar(!toggleCalendar)} 
                value={parseDate()} 
                readOnly
            ></input>

            {toggleCalendar && 
                <Calendar onChange={setDateValue} onClickDay={hideCalendar}></Calendar>
            }            
        </div>
    )
}

export default InputDate