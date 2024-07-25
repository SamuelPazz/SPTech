

    function verificar(){
        var nome = iptnome.value;
        var altura = Number(iptaltura.value);
        var min = Number(iptmin.value);
        var max = Number(iptmax.value);

        if(min > 1 && max > min){
            if(altura >=min && altura <=max){
            divMostrar.innerHTML+=`O candidato ${nome}, com altura de ${altura} metros, participará do processo de seleção de piloto”,`
            } else {
                divMostrar.innerHTML+=`Infelizmente, o candidato ${nome}, com altura de ${altura} metros, não atende os requisitos da seleção`
            }
        } else {
            alert(`Intervalo da altura de seleção é inválida! A altura inicial deve ser maior que 1 e a altura final deve ser maior que a altura inicial`)
        } 
    }

