import { useState, useEffect } from 'react'

import ArrowDown from './Icons/expand.svg'
import ArrowUp from './Icons/collapse.svg'

import './InputDropdown.css'

function InputDropdown(props) {
    const [icon, setIcon] = useState(ArrowDown)
    const [menuToggle, setMenuToggle] = useState(false)
    const [selection, setSelection] = useState('')

    const toggleDropdown = () => {
        if(icon === ArrowDown){
            setIcon(ArrowUp)
            setMenuToggle(true)

            document.querySelector('[data-id="dropdown-icon"]').classList.remove('input-dropdown__icon--menuclosed')
            document.querySelector('[data-id="dropdown-icon"]').classList.add('input-dropdown__icon--menuopened')

            document.querySelector('.input-dropdown').classList.remove('input-dropdown--menuclosed')
            document.querySelector('.input-dropdown').classList.add('input-dropdown--menuopened')

        } else {
            setIcon(ArrowDown)
            setMenuToggle(false)

            document.querySelector('[data-id="dropdown-icon"]').classList.remove('input-dropdown__icon--menuopened')
            document.querySelector('[data-id="dropdown-icon"]').classList.add('input-dropdown__icon--menuclosed')

            document.querySelector('.input-dropdown').classList.remove('input-dropdown--menuopened')
            document.querySelector('.input-dropdown').classList.add('input-dropdown--menuclosed')
        }
    }

    useEffect(() => {
        props.getInputValueFromChild(props.name, selection)
    }, [selection, props])

    return (
        <div className='input-dropdown input-dropdown--menuclosed' onClick={toggleDropdown}>
            <input className='input-dropdown__input' placeholder={props.placeholder} type='text' value={selection} readOnly></input>  
            <img src={icon} className='input-dropdown__icon input-dropdown__icon--menuclosed' alt='Expande menu dropdown' data-id='dropdown-icon'/>
            {menuToggle &&
                <div className='input-dropdown__item-container'>
                    <div className='input-dropdown__item' onClick={() => setSelection('Compra')}>Compra</div>
                    <div className='input-dropdown__item' onClick={() => setSelection('Venda')}>Venda</div>
                </div>
            }
        </div>        
    )
}

export default InputDropdown