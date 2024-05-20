var hora = new Date();
var hr = hora.getHours;
const image = document.getElementById("imagens");
const conte = document.querySelector(".container");
var text = document.querySelector(".texto")

if(hr < 12){
    text.innerHTML = `<p>Agora são <strong>${hr}Horas</strong>!</p>`
    conte.style.background = (`linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,198,45,1) 100%)`);
    image.innerHTML = `<img src="/ex1/Designs/Dia.avif" alt="imgd">`;
} else if(hr < 18){
    text.innerHTML = `<p>Agora são <strong>${hr}Horas</strong>!</p>`
    conte.style.background = (`linear-gradient(0deg, rgba(195,74,34,1) 32%, rgba(253,135,45,1) 90%)`);
    image.innerHTML = `<img src="/ex1/Designs/Tarde.jpg" alt="imgt">`;
} else { 
    text.innerHTML = `<p>Agora são <strong>${hr}Horas</strong>!</p>`
    conte.style.background = (`linear-gradient(0deg, rgba(8,10,108,1) 4%, rgba(0,0,0,1) 98%)`);
    image.innerHTML = `<img src="/ex1/Designs/Noite.jpg" alt="imgn">`;

}