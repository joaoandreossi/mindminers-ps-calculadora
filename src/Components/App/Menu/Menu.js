import { useState} from 'react'
import LineSelection from '../LineSelection/LineSelection'
import './Menu.css'

function Menu(props) {
    const [linePosition, setLinePosition] = useState('line__selector--position-start')

    const handleTabChange = (button) => {
        setLineSelectorPosition(button.dataset.id)
        highlightSelectedTab(button)
    }

    const setLineSelectorPosition = (tab) => {
        switch(tab){
            case '0':
                setLinePosition('line__selector--position-start')
                props.getTabSelectionFromChild(0)
                break
            case '1':
                setLinePosition('line__selector--position-mid')
                props.getTabSelectionFromChild(1)
                break
            case '2':
                setLinePosition('line__selector--position-end')
                props.getTabSelectionFromChild(2)
                break
            default:
                break
        }
    }

    const highlightSelectedTab = (button) => {
        for(let i = 0; i < button.parentNode.children.length; i++){
            if(button.parentNode.children[i].classList.contains('menu__button--selected')){
                button.parentNode.children[i].classList.remove('menu__button--selected')
            } 
        }

        button.classList.add('menu__button--selected')
    }

    return (
        <div className='menu'>
            <div className='menu__button-container' onClick={(e) => handleTabChange(e.target)}>
                <button className='menu__button menu__button--selected' data-id='0'>Nova operação</button>
                <button className='menu__button' data-id='1'>Gráfico</button>
                <button className='menu__button' data-id='2'>Histórico</button>
            </div>
            <LineSelection position={linePosition}></LineSelection>
        </div>
        
    )
}

export default Menu