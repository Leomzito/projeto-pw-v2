import './Calculadora.css'
import Contador from './Contador'
import {useState} from "react"

function Calculadora(){
    const [qtdBurguer,setqtdBurguer] = useState(0)
    const [qtdSalada,setqtdSalada] = useState(0)
    const [qtdRefri,setqtdRefri] = useState(0)

    const totalBurguer = qtdBurguer*15.90
    const totalSalada = qtdSalada*17.90
    const totalRefri = qtdRefri*6.00

    const totalGeral = totalBurguer+totalRefri+totalSalada

    return(
        <div className="cardCalc">
        <div className="cardCalc-container">
            <h2>X-Burguer</h2>
            <h3>R$ 15.90</h3>
            <h3>Quantidade</h3>
            <Contador 
                quantidade={qtdBurguer}
                setQuantidade={setqtdBurguer}
            />
            <h2>Total: {totalBurguer.toFixed(2)}</h2>
        </div>
        <div className="cardCalc-container">
            <h2>X-Salada</h2>
            <h3>R$ 17.90</h3>
            <h3>Quantidade</h3>
            <Contador 
                quantidade={qtdSalada}
                setQuantidade={setqtdSalada}
            />
            <h2>Total: {totalSalada.toFixed(2)}</h2>
        </div>
        <div className="cardCalc-container">
            <h2>Refrigerante</h2>
            <h3>R$ 6.00</h3>
            <h3>Quantidade</h3>
            <Contador 
                quantidade={qtdRefri}
                setQuantidade={setqtdRefri}
            />
            <h2>Total: {totalRefri.toFixed(2)}</h2>
        </div>
        <div>
            <h2>
                Total: {totalGeral.toFixed(2)}
            </h2>
        </div>
        </div>
    )
}

export default Calculadora 