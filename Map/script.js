const numeros = [1, 2, 3, 4, 5]

// FOR COM PROPOSITO (TRANSFORMA OS ELEMENTOS)

let resultado = numeros.map(function(e){
    return e * 2
})

console.log(resultado )

const soma10 = (e) => {
    return e + 10
}

const triplo = (e) => e * 3

const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)

// DESAFIO 

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = (e) => JSON.parse(e)
const preco = (p) => p.preco

const resultado2 = carrinho.map(paraObjeto).map(preco) 

console.log(resultado2)