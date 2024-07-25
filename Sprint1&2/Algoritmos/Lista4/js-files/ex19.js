
    function verificar() {
        var nota1 = Number(inputNota1.value);
        var nota2 = Number(inputNota2.value);

        var media = (nota1 + nota2) / 2;

        if (media >= 6) {
            divMostrar.innerHTML = `Parabéns, aprovado!`
        } else {
            divMostrar.innerHTML=`Tente outra vez...`
        }
    }

