let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

let [a, b, c, d, e = 'Banana'] = frutas  // DESTRUCTURING

//let [a, b, , d] = frutas  // PODEMOS PULAR INDICES

let coisas = Array(['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria'])

let [[ , ,x], [ ,y]] = coisas

//console.log(a, b, c, d, e)

console.log(x, y)