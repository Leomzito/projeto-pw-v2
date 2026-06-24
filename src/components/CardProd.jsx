import './CardProd.css'

function CardProd(props){
    return(
        <div className="cardProd">
        <div className="cardProd-container">
            <h2>{props.nome}</h2>
            <h3>R$ {props.preco}</h3>
        </div>
        </div>
    )
}

export default CardProd 



/*
<div className="card">
<h2>X-Burger</h2>
<h3>R$ 15,00</h3>
</div>  
<div className="card">
<h2>X-Salada</h2>
<h3>R$ 17,90</h3>
</div>
<div className="card">
<h2>Refrigerante</h2>
<h3>R$6,00</h3>
</div>
*/

