import './ButtonSubmit.css'

function ButtonSubmit(props) {
    const handleClick = () => {
        if(!props.disabled){
            props.getNewOperationFromChild(props.operation)
            props.resetState()
        }
    }
    
    return (
        <button className={`button-submit ${props.disabled ? 'button-submit--disabled' : ''}`} onClick={handleClick}>Registrar</button>
    )
}

export default ButtonSubmit