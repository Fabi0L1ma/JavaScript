class Animal{

    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir(){
        console.log('Dormir')
    }
}

class Passaro extends Animal{

    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar(){
        console.log('Voar')
    }
}

class Papagaio extends Passaro{
    
    constructor(sabeFalar, cor, tamanho, peso){
        super('Media', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar(){
        console.log('Falar')
    }
}

let papagaio = new Papagaio(true, 'VERDE', 25, 350)
console.log(papagaio)

let papagaioFilhote = new Papagaio(false, 'Branco', 10, 80)
console.log(papagaioFilhote)