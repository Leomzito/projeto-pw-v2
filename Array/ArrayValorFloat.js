const precoString = ["R$10.00","R$25.50","R$75.90"]

const preco = precoString.map(valor => {

    const apenasNumeros = valor.replace("R$","")

    return parseFloat(apenasNumeros).toFixed(2)
})

console.log(preco)