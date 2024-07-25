
    var qtdHomens = 0;
    var qtdMulheres = 0;
    var pesoH = 80;
    var pesoM = 60;
    function calcPeso(){
        qtdHomens = inputHomens.value;
        qtdMulheres = inputMulheres.value;

        var calcPeso = (qtdHomens * pesoH) + (qtdMulheres * pesoM);
        divMostrar.innerHTML = `Este elevador suporta 800 Kg e o peso estimado desta lotação é de ${calcPeso}kg<br>`

        if (calcPeso > 800) {
        divMostrarIF.innerHTML = `<span style="color:#0000ff">Será necessário que alguém desça para que o elevador se movimente</span><br>`
        }
    }

