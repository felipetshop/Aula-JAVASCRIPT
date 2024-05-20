var btn = document.querySelector("#btn")
btn.addEventListener("click", function() {
    var data = new Date();
    var atano = data.getFullYear();
    var ano = document.getElementById("year");
    var resu = document.getElementsByClassName("end")[0];
    if (ano.value.length == 0 || (ano.value) > atano || (ano.value) < 1830){
        window.alert('[ERROU] CONFERE SUA DATA DE NASCIMENTO NOVAMENTE')
    } else {
        var sex = document.getElementsByName('mark')
        var idade = atano - Number(ano.value)
        var gen = ''
        if(sex[0].checked) {
            gen = 'homem'
        } else{
            gen = 'mulher'
        }
        resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade`
        if(idade > 60 && gen == 'homem'){
            resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade` +
            `<div class="imag"> <img src="/ex2/Designs/old man.jpg" alt="velho"> </div>`
        } else if (idade > 60 && gen == 'mulher'){ // IDOSOS
            resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade` +
            `<div class="imag"> <img src="/ex2/Designs/old lady.jpg" alt="velho"> </div>`
        } else if (idade > 18 && gen == 'homem'){
            resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade` +
            `<div class="imag"> <img src="/ex2/Designs/man.jpg" alt="adulto"> </div>`
        } else if (idade > 18 && gen == 'mulher'){ // ADULTOS
            resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade` +
            `<div class="imag"> <img src="/ex2/Designs/girl.jpg" alt="adulta"> </div>`
        } else if (idade >=0 && idade < 10 && gen == 'homem') {
            resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade` +
            `<div class="imag"> <img src="/ex2/Designs/boyz.jpg" alt="criança"> </div>`
        } else if (idade >=0 && idade < 10 && gen == 'mulher'){ //CRIANÇA
            resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade` +
            `<div class="imag"> <img src="/ex2/Designs/little girl.jpg" alt="criançam"> </div>`
        } else if (idade > 11 && gen == 'homem'){
            resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade` +
            `<div class="imag"> <img src="/ex2/Designs/teeneger boy.jpg" alt="tenn"> </div>`
        } else if (idade > 11 && gen == 'mulher'){    //JOVEM
            resu.innerHTML = `Você é ${gen} e tem ${idade} anos de idade` +
            `<div class="imag"> <img src="/ex2/Designs/teenager girl.jpg" alt="jovef"> </div>`
        }
    }

});

//var img = documento.createlement('img')
//img.setatribute('id', "foto") formula
//img.setatribute("src", "foto-boyz.png")