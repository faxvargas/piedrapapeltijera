let pc;
let movpc;
let hum;
let movhum;
let res;
function aleatorio(min,max) {
    return Math.random()*(max-min)+min;
}
pc=Math.floor(aleatorio(1,4));

if (pc==1) {
    movpc="piedra";

}
if (pc==2) {
    movpc="papel";

}
if (pc==3) {
    movpc="tijera";

}
hum=parseInt(prompt("Por favor seleccione una opcion \n 1.Piedra \n 2.Papel \n 3.Tijera."));
if (hum==1) {
    movhum="piedra";

}
if (hum==2) {
    movhum="papel";

}
if (hum==3) {
    movhum="tijera";
}
console.log("El pc saca " +movpc);
console.log("El humano saca " +movhum);
if (movpc=="piedra " && movhum=="piedra") {
    res="Empate"
}