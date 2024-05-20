//existe como adicionar a função em uma variavel ex(Multiplicação)
/*
let s = function(x){
    return x*2
}

console.log(s(10))
*/

//Fatorial

function Fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c;  
    }
    return fat
}

console.log(Fatorial(5))