    var btn = document.getElementById('btn1');
    var num = document.getElementById('num1');
    var res = document.getElementById('resutab');
    const fim = document.querySelector('.final')
    const but = document.getElementById('btn2');

    var valores = []

    function isnum(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }
    
    function inlist(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        } else{
            return false
        }
    }

    function atualizarInformacoes() {
        if (valores.length == 0) {
            window.alert(`[ERRO] Nada foi adicionado a lista!`)
        } else {
            let total = valores.length;
            let maior = valores[0]
            let menor = valores[0]
            let prim = valores[0]
            let ult = valores[valores.length-1]
            let sum = 0
            let media = 0
            for (let pos in valores){
                sum += valores[pos] 
                if(valores[pos] > maior)
                    maior = valores [pos]
                if(valores[pos] < menor)
                    menor = valores [pos]
            }
            media = sum / total
            fim.innerHTML = `<br> Sua lista tem o total de : ${total} elementos <br>` + 
            `O maior valor informado foi ${maior}. <br>` + 
            `O menor valor informado foi ${menor}. <br>` + 
            `O primeiro número da lista é ${prim}. <br>` + 
            `O último número da lista é ${ult}. <br>` +
            `A soma dos valores totaliza: ${sum}. <br>` + 
            `A média dos valores em sua lista é ${media.toFixed(2)}.`


        }
    }

    btn.addEventListener("click", function(){
    if (isnum(num.value) && !inlist(num.value, valores)) { 
        fim.innerHTML = ''
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        res.appendChild(item);     
    } else{
        window.alert('[ERRO] Digite o número corretamente')
    }
    num.value = ''
    num.focus();
})
    but.addEventListener('click', function(event){
        event.preventDefault();
    atualizarInformacoes();
});


