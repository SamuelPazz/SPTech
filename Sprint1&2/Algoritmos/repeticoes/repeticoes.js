var contador = 1;
var limite = 10;
function contar() {

    for (; contador <= limite; contador++) {
        divMensagem.innerHTML += `${contador}<br>`;
    }
    limite += 10;
}