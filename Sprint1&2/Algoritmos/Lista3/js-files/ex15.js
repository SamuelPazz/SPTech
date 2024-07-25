
    var peso = 0;
    var altura = 0;

    function calcIMC(){
        peso = inputPeso.value;
        altura = inputAltura.value;

        var altura2 = altura * altura;
        var calcFinal = peso / altura2;
        divMostrar.innerHTML = `Seu imc é ${calcFinal}`
    }


