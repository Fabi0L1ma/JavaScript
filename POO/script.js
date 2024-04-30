class ContaBncaria{

    constructor(){
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        this.saldo -= valor;
    }

    consultarSaldo(){
        return this.saldo
    }
}

let x = new ContaBncaria()
let y = new ContaBncaria()

console.log(`Saldo da Conta: R$${x.consultarSaldo()}`)

x.depositar(500)

console.log(`Atualização 1 (DEPOSITO): R$${x.consultarSaldo()}`)

x.sacar(100)

console.log(`Atualização 2 (SAQUE): R$${x.consultarSaldo()}`)