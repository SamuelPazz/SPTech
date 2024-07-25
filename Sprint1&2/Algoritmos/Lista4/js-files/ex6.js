

    function verificarF(){
        var renda = Number(inputRenda.value);
        var prestacao = Number(inputPrestacao.value);
        var calculo = (prestacao / renda) * 100;
    
        divCalc.innerHTML = `A prestação corresponde a ${calculo}% da renda familiar`

        if (calculo > 30) {
            divComplementar.innerHTML = `Será necessário complementar a renda familiar`
        }
    }

