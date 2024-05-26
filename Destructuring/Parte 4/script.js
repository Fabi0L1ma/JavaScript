let lista = [10, 20, 30, 40]

//let [a, ...resto] = lista 

//console.log(a)
//console.log(resto)

let obj = {
    a: 10,
    b: 20, 
    c: 30,
    d: 40
}

let {a, ...z} = obj

console.log(a)
console.log(z)