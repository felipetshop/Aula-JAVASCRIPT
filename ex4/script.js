var btn = document.getElementById('btn1');
btn.addEventListener("click", function(){
    var numi = document.getElementById('num1');
    var res = document.getElementById('resutab');
    res.innerHTML = '';
    if(numi.value.length == 0){
        window.alert('[ERRO] está faltando o número!!');
    } else{
        let n = Number(numi.value);
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item);          
        }
    }
});


