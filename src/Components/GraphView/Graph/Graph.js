import { useEffect, useState } from 'react'
import EntriesGroup from '../../HistoryView/EntriesGroup/EntriesGroup'
import ChartView from '../ChartView/ChartView'

import './Graph.css'

function Graph(props){
    const [currentList, setCurrentList] = useState('')
    const [listSize, setListSize] = useState(0)
    const [salesTax, setSalesTax] = useState([])

    const getTaxValues = (name) => {
        let years = {}
        
        props.entries[name].forEach(entry => {
            if(years.hasOwnProperty(entry.date.getFullYear())){
                if(entry.type === 'Venda'){
                    years[entry.date.getFullYear()][entry.date.getMonth()] = years[entry.date.getFullYear()][entry.date.getMonth()] + entry.salesTax
                }
            } else {
                years[entry.date.getFullYear()] = [0,0,0,0,0,0,0,0,0,0,0,0]
                if(entry.type === 'Venda'){
                    years[entry.date.getFullYear()][entry.date.getMonth()] = entry.salesTax
                }
            }
        })
        setSalesTax(years)
    }

    const handleRender = () => {
        let keys = Object.keys(props.entries)
        let render = []
        if(currentList === ''){
            render.push(<div className='graph__message'>Selecione alguma das ações para visualizar um gráfico dos impostos acumulados.</div>)
            keys.forEach(key => {
                render.push(
                    <div onClick={() => {
                        getTaxValues(key)
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
            render.push(<button className='graph__button-back' onClick={() => setCurrentList('')}>voltar</button>)
            render.push(<ChartView key={currentList} name={currentList} values={salesTax}></ChartView>)
            return <div className='graph__detailed-view-container'>{render}</div>
        }
    }

    useEffect(() => {
        if(props.activeTab !== 1){
            setCurrentList('')
        }
    }, [props.activeTab])

    return(
        <div className='graph'>
            {handleRender()}
        </div>
    )
}

export default Graph