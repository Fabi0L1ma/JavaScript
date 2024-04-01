var nota1 = prompt("Digite a nota 1 do aluno: ")
var nota2 = prompt("Digite a nota 2 do aluno: ")
var notaRecuperacao = prompt("Digite a nota de recuperação: ")

nota1 = parseInt(nota1)
nota2 = parseInt(nota2)

var media = (nota1 + nota2)/2

notaRecuperacao = parseFloat(notaRecuperacao)

document.write(media + "<br>")
document.write(notaRecuperacao)


