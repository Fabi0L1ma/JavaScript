// PARADIGMA PROCEDURAL
/*
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'

function adicionar_cadeira(qtde_pernas, giratoria, cor){
    let cadeira = Array()

    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeiras.push(cadeira)
}

adicionar_cadeira(3, false, 'verde')

console.log(cadeiras)
*/

// PARADIGMA DE POO

class Cadeira{

    constructor(qtde_pernas, giratoria, cor){
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira(){
        if(this.giratoria === true){
            console.log('Girou!')
        }else{
            console.log('Não Gi ra!')
        }
    }
}

let cadeira1 = new Cadeira(4, false, 'Azul')
let cadeira2 = new Cadeira(1, true, 'Vermelha')

let cadeiras = Array()

cadeiras.push(cadeira1, cadeira2)

console.log(cadeiras)
