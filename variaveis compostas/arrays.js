let num = [5, 9, 6, 4, 8, 0, 3]
num.push(10) //adiciona um numero e um novo elemento
num.sort() //Organiza os elementos de forma crescente
// num[9] = 1 adiciona um conteudo na posição especificada
console.log(`nosso array é o ${num}`)
console.log(`O array tem ${num.length} posições`)
console.log(num[4]) //Mostra o valor na posição 4
let pos = num.indexOf(9)
if(pos == -1){
    console.log(`o valor não foi encontrado`)
} else {
    console.log(`o valor está na posição ${pos}`)
}

