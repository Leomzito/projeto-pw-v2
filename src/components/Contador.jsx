function Contador({quantidade,setQuantidade}){

    return (

        <>
            <h1>{quantidade}</h1>

            <button onClick={() => setQuantidade(quantidade+1)}>Adicionar</button>
            <button onClick={() => { if (quantidade > 0) setQuantidade(quantidade-1)}}>Diminuir</button>
            <button onClick={() => setQuantidade(0)}>Zerar</button>
        </>
    )
}

export default Contador