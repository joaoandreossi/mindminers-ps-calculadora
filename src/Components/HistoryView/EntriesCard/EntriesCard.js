import TrashIcon from './Icons/icon-trash.svg'
import './EntriesCard.css'

function EntriesCard(props){
    
    const handleClick = () => {
        props.handleDeletion(props.title, props.id)
    }

    return(
        <div className='entries-card'>
            <header className='entries-card__header'>
                <span className='entries-card__title'>{props.title}</span>
                <span className='entries-card__date'>{props.date}</span>
            </header>
            <div className='entries-card__type'>{props.type === 'Compra' ? 'Compra' : 'Venda'}</div>
            <div className='entries-card__quantity'>Quantidade: {props.quantity}</div>
            <div className='entries-card__price-tax-container'>
                <span className='entries-card__price'>Valor: R$ {props.price}</span>
                <span className='entries-card__tax'>Taxa: R$ {props.tax}</span>
                {props.type === 'Compra' &&
                    <img className='entries-card__icon entries-card__icon--buy' src={TrashIcon} alt='Ícone de um lixo.' onClick={handleClick}></img>
                }
            </div>
            {props.type === 'Venda' &&
                <div className='entries-card__sell-tax-container'>
                    <div className='entries-card__sell-tax'>Imposto acumulado: R$ {props.salesTax.toFixed(5)}</div>
                    <img className='entries-card__icon entries-card__icon--sell' src={TrashIcon} alt='Ícone de um lixo.' onClick={handleClick}></img>
                </div>
            }
        </div>
    )
}

export default EntriesCard