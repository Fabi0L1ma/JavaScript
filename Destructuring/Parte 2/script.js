let produto = {
    descricao: 'Notebook',
    preco: 1800,

    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

//let {descricao, preco} = produto

//let {descricao: d, preco: p, desconto = 5} = produto // NÃO MODIFICA VALOR, SO ADICIONA SE O ATRIBUTO FOR UNDEFINED

// console.log(d, p, desconto)

let {detalhes: {fabricante: f, modelo: m}} = produto

console.log(f, m)
