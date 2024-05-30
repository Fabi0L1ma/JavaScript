const prdouto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad PRO', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 2.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]

//PERCORRE TODO O ARRAY E CRIA UM NOVO COM TODOS OS ELEMENTOS QUE PASSARAM NO TESTE IMPLEMENTADO
console.log(prdouto.filter(function(p){
    return p.preco > 500 && p.fragil == true
}))

// OU

const caro = (p) => p.preco > 500
const fragil = (p) => p.fragil == true

console.log(prdouto.filter(caro).filter(fragil))