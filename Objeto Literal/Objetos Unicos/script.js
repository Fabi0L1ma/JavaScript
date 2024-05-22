let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',

    status(){
        console.log('Ativo')
    }
}


//console.log(assinatura.descricao)

// ATRIBUÇÃO DE REFERENCIAS

let y = assinatura

y.descricao = 'Internet + TV + Telefone'

console.log(assinatura)
console.log(y)