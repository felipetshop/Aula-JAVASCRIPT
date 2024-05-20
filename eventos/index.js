var txt = document.getElementById('bloco')
txt.addEventListener('click', click)
txt.addEventListener('mouseenter', enter)
txt.addEventListener('mouseout', exit)

function click() {
    txt.style.background = 'green'
    txt.innerHTML ='CLICOU SAFADINHO 👀'
    txt.style.borderRadius = '2rem'

}

function enter(){
    txt.innerHTML = 'VAGABUNDA'
    txt.style.background ='blue'
    txt.style.borderRadius = '10rem'
}

function exit(){
    txt.innerText ='SAIU SAFADO'
    txt.style.background ='red'
    txt.style.borderRadius = '10rem'
}

