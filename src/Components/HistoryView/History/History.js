import { useState } from 'react'
import EntriesGroup from '../EntriesGroup/EntriesGroup'
import EntriesCard from '../EntriesCard/EntriesCard'
import './History.css'

function History(props){
    const [currentList, setCurrentList] = useState('')
    const [listSize, setListSize] = useState(0)



    const handleRender = () => {
        let keys = Object.keys(props.entries)
        let render = []
        if(currentList === ''){
            render.push(<div className='history__message'>Selecione alguma das ações para visualizar o seu histórico de operações.</div>)
            keys.forEach(key => {
                render.push(
                    <div onClick={() => {
                        setCurrentList(key)
                        setListSize(props.numberEntries(key))
                        }}>
                        <EntriesGroup key={key} name={key} operationNumber={props.numberEntries(key)}></EntriesGroup>
                    </div>
                )
            })
            return render
        } else if(listSize === 0){
            setCurrentList('')
        } else {
            render.push(<button className='history__button-back' onClick={() => setCurrentList('')}>voltar</button>)
            keys.forEach(key => {
                if(key === currentList){
                    props.entries[key].sort((a,b) => b.date-a.date).forEach((op) => {
                        render.push(
                            <EntriesCard
                                id={op.id}
                                title={op.code}
                                date={`${op.date.getDate()}/${op.date.getMonth() + 1}/${op.date.getFullYear()}`}
                                type={op.type}
                                quantity={op.quantity}
                                price={op.price}
                                tax={op.tax}
                                salesTax={op.salesTax}
                                handleDeletion={handleDeletion}
                                key={op.id}>
                            </EntriesCard>
                        )
                    })
                }
            })
            return <div className='history__detailed-view-container'>{render}</div>
        }
    }

    const handleDeletion = (name, id) => {
        props.removeOperation(name, id)
        setListSize(listSize - 1)
    }


    
    return(
        <div className='history'>
            {handleRender()}
        </div>
    )
}

export default History