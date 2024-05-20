var btn = document.getElementById('btn');

function calcular() {
    var velo = document.getElementById('vel');
    var res = document.getElementById('resu');
    var speed = Number(velo.value)
    
    if(speed > 80) {
        window.alert('Você foi Multado');
        res.innerHTML = `<p>Dirija-se a Unidade do <strong>DETRAN</strong> mais proxima para verificar.</p>`;
    }  else {
        window.alert('Tenha um ótimo dia! 😘');
        res.innerHTML = (`<p>Obrigado por respeitar as leis de transito!</p>`);
    }
    
}

btn.addEventListener('click', calcular) ;
