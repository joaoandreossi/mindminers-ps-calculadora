import './EntriesGroup.css'

function EntriesGroup(props){

    return(
        <div>
            <div className='entries-group'>
                <div className='entries-group__name'>{props.name}</div>
                <div className='entries-group__operation-container'>
                    <span className='entries-group__text'>Número de operações: {props.operationNumber}</span><span className='entries-group__dots'>...</span>
                </div>
            </div>          
        </div>
    )
}

export default EntriesGroup