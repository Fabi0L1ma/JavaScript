var data = new Date()

var hora = data.getHours()
var minutos = data.getMinutes()

var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()

console.log("Horario: " + hora + ":" + minutos)
console.log("Data: " + dia + "/" + (mes + 1) + "/" + ano)

//CALCULOS COM DATAS

console.log(data.toString()) // TRANSFORMA DATA EM STRING

data.setDate(data.getDate() + 1) // ADICIONA VALOR AO DIA 
console.log(data.toString())

data.setMonth(data.getMonth() + 1) // ADICIONA VALOR AO MES
console.log(data.toString())

data.setFullYear(data.getFullYear() + 1) // ADICIONA VALOR AO ANO
console.log(data.toString())

// CALCULO DE UMA DATA A OUTRA

var dataInicial = new Date(2024, 4, 1)
var dataFinal = new Date(2024, 4, 10)

var calculoData = Math.abs(dataInicial.getTime() - dataFinal.getTime()) // TRANSFORMAS OS DIAS EM MILESSEGUNDOS

var milessegundos_porDia = (1*24*60*60*1000) //CALCULO DE MILESSEGUNDOS POR DIA (PADRÃO)

console.log("A diferença entre "+ dataInicial + " e " + dataFinal + "é: " + (calculoData/milessegundos_porDia) + " dias!")