let Bicicleta = {
    cor: 'Banco',
    marcha: 'Unica',
    aro: 12,

    pedalar(){
        console.log(`Pedalando!`)
    }
}

let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: '18',
    aro: 26,

    pedalar(){
        console.log(`Pedalando!`)
    }
}

console.log(Bicicleta)
console.log(Bicicleta2)


// FORMA FACTORY 

let BicicletaFactory = function(cor, marcha, aro){
    return{
        cor: cor,
        marcha: marcha,
        aro: aro,

        pedalar(){
            console.log(`Pedalando`)
        }
    }
}

let Bicicleta3 = BicicletaFactory('Azul', 'Unica', 18)

console.log(Bicicleta3)

let Bicicleta4 = BicicletaFactory('Preto', 21, 26)

console.log(Bicicleta4)