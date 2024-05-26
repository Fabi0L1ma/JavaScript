// OBJETO LITERAL

let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a380',

    levantarVoo: function(){
        console.log('Levantar Voo')
    }
}

// FUNÇÃO CONSTRUTORA

let AviaoFunc = function(){
    this.cor = 'Azul',
    this.modelo = 'Boeing 787',

    this.levantarVoo = function(){
        console.log('Levantar Voo!')
    }
}

let a2 = new AviaoFunc()

class AviaoConstr{
    constructor(){
        this.cor = 'Vermelho',
        this.modelo = 'Embraer E-Jets'
    }

    levantarVoo(){
        console.log('Levantar Voo')
    }
}

let a3 = new AviaoConstr()

console.log(a1)
console.log(a2)
console.log(a3)

