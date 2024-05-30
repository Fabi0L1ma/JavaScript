const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// ACUMULA OS ELEMENTOS

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// DESAFIO

const todosBolsistas = (alunoAnterior, alunoPosterior) => alunoAnterior == true && alunoPosterior == true
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const possuiBolsista = (alunoAnterior, alunoPosterior) => alunoAnterior == true || alunoPosterior == true
console.log(alunos.map(a => a.bolsista).reduce(possuiBolsista)) 


