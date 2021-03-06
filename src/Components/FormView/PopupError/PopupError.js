import './PopupError.css'

function PopupError(props) {
    return (
        <div className='popup-error'>Erro!<br></br>{props.message}</div>
    )
}

export default PopupError