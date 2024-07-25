

    function avaliar(){
        nota = Number(inputNota.value);

        if(nota <0 || nota >10){
            divMostrar.innerHTML=`Nota inválida`
        } else if(nota >=0 && nota <5){
            divMostrar.innerHTML=`Não aprovado`
        } else if(nota >=5 && nota <=6){
            divMostrar.innerHTML=`Neutro`
        } else if(nota >6){
            divMostrar.innerHTML=`Aprovado`
        }
    }

