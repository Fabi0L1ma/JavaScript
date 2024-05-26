// SPREAD

let frase = 'Como Voce esta?'

console.log(frase)

console.log(...frase) // ESPALHA AS STRINGS
console.log([...frase])

let lista1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4']
let lista2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']

let listaCompleta = ['Web Completo', 'Android Completo', ...lista1, ...lista2]

console.log(listaCompleta)

let pessoa = {
    nome: 'João',
    idade: 27
}

let clonePessoa = {
    endereco: 'Rua A',
    ...pessoa
}

console.log(clonePessoa)


// REST 

function soma(...p){
    let resultado = 0

    p.forEach(valor => resultado += valor)

    return resultado
}

console.log(soma(3, 5, 7, 8))

function multiplicacao(m, ...p){
    console.log(m)

    let resultado = 0

    p.forEach(valor => resultado += valor * m)

    console.log(p)

    return resultado
}

console.log(multiplicacao(5, 7, 12, 3, 49))