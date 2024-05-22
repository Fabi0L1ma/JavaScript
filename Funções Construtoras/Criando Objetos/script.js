let Carro = function() {
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMax = 180

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }

}

let carro = new Carro()

console.log(`Velocidade Atual: ${carro.getVelocidadeAtual()}`)

carro.acelerar()
carro.acelerar()
carro.acelerar()

console.log(`Velocidade Atual: ${carro.getVelocidadeAtual()}`)