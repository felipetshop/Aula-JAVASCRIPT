var idade = 66
console.log(`Você tem ${idade} anos`)

if(idade < 16){
    console.log('Não vota')
} else if (idade < 18 || idade > 70){
    console.log('Seu voto é opcional')
} else if (idade >= 18){
    console.log('Seu voto é obrigatório')
}