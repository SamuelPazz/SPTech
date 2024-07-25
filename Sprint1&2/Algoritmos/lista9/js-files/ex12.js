

    function verTab(){
        var tabuada = selectTabuada.value;
        var texto = ``;
        var conta;
        for(var contador = 1; contador <= 12; contador++){
            conta = tabuada * contador
            texto += `${tabuada} X ${contador} = ${conta}<br>`;
        } divMostrar.innerHTML = `${texto}`

    }

