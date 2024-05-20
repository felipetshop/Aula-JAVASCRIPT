var agora = new Date();
var hora = agora.getHours();

if (hora < 12) {
    console.log(`Já são ${hora}H da manhã!`);
} else if (hora < 18) {
    console.log(`Já são ${hora}H da tarde!`);
} else {
    console.log(`Já são ${hora}H da noite!`);
}
