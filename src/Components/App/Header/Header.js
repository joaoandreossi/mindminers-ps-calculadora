import './Header.css'

function Header(){
    return (
        <header className='header'>
            <h1 className='header__title'>Calculadora</h1>
            <p className='header__description'>Registre sua operação de compra ou venda e lhe diremos quanto de imposto você deve pagar.</p>
        </header>
    )
}

export default Header