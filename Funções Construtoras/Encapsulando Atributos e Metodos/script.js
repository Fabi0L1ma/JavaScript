let Carro = function() {
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMax = 180

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50

        if(velocidade > this.velocidadeMax){
            velocidade = this.velocidadeMax
        }
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

console.log(carro.velocidadeAtual)

carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.velocidadeMax = 420 // NÃO ERA PARA ACONTECER ISSO (TEMOS QUE FAZER O ENCAPSULAMENTO)
carro.acelerar()
carro.acelerar()
carro.acelerar()

console.log(carro.velocidadeAtual)


let Carro2 = function() {

    let velocidadeMax = 180
    let KM_rodados = 0

    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50

        if(velocidade > velocidadeMax){
            velocidade = velocidadeMax
        }
        this.setVelocidadeAtual(velocidade)

        setKM_rodados(0.07)
        console.log(KM_rodados)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }

    let setKM_rodados = function(km){
        KM_rodados += km
    }
}

let carro2 = new Carro2()

console.log(carro2.velocidadeAtual)
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.velocidadeMax = 420 // COM O ENCAPSULAMENTO NÃO CONSEGUIMOS ALTERAR O VALOR
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()

console.log(carro2.velocidadeAtual)

