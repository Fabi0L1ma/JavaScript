let animal = {atributo1: 'A'}
let vertebrado = {__proto__: animal, atributo2: 'B'}
let ave = {__proto__: vertebrado, atributo3: 'C'}

console.log(ave.atributo3, ave.atributo2, ave.atributo1)

Object.prototype.atributo4 = 'Z'

console.log(ave.atributo3, ave.atributo2, ave.atributo1, ave.atributo4)