/*
let lista = [10, 20, 30, 40]

function teste([a, b, , d, e = 100]){
    console.log(a, b, d, e)
}

teste(lista)

*/

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

function teste({a: x, d, z = 10}){
    console.log(x, d, z)
}

teste(obj)
