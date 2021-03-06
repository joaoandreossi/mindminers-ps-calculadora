import './LineSelection.css'

function LineSelection(props) {
    return (
        <div className='line'>
            <div className={`${props.position} line__selector`}></div>
            <div className='line__thin'></div>
        </div>
    )
}

export default LineSelection