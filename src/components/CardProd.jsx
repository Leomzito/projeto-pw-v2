import './CardProd.css'
import Contador from './Contador'
import {useState} from "react"

function CardProd({nome,preco}){
    const [contador,setContador] = useState(0)

    return(
        <div className="cardProd">
        <div className="cardProd-container">
            <h2>{nome}</h2>
            <h3>R$ {preco.toFixed(2)}</h3>
            <h3>Quantidade</h3>
            <Contador 
                quantidade={contador}
                setQuantidade={setContador}
            />
            <h3>Total: {(preco*contador).toFixed(2)}</h3>
        </div>
        </div>
    )
}

export default CardProd 