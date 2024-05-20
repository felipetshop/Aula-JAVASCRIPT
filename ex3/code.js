var btn = document.getElementById('btn1');
btn.addEventListener("click", function(){
    var ini = document.getElementById('ini');
    var fim = document.getElementById('fin');
    var int = document.getElementById('inte');
    var resu = document.getElementById('result');
    if (ini.value.length == 0 || fim.value.length == 0 || int.value.length == 0) {
        window.alert('[ERRO] está faltando as informações.');
        resu.innerHTML = 'Impossível contar!'
        
    } else{
        resu.innerHTML = `Contando: `
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(int.value);
        for (var n = i; n <= f; n += p) {
            resu.innerHTML += `${n} --> `;  
        } 

    } resu.innerHTML += `🤞`

});