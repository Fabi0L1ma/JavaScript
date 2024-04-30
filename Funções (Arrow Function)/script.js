/*
let quadrado = function(x = 5){
    return x * x
}
*/
// ARROW FUNCTION
let quadrado = (x) =>{
    return x * x
} 

console.log(quadrado(3))

let parOuImpar = (n) => {
    if(n % 2 === 0){
        return 'É PAR!'
    }else{
        return 'É IMPAR!'
    }
}

console.log(parOuImpar(2))