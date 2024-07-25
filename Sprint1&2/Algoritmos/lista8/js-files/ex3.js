

    function simular(){

        var passageiro = selectPassageiro.value;
        var passagem = selectPassagem.value;
        var valorP = 4.40; // valor da passagem
        var valorI = 5.90; // valor integração

        if(passageiro == "3"){
            divMostrar.innerHTML=`Valor da passagem escolhida: R$0,00`
        } else if(passageiro == "2" && passagem == "1"){
            valorP *= 0.5;
            divMostrar.innerHTML=`Valor da passagem escolhida: ${valorP}`
        } else if(passageiro =="2" && passagem == "2" ){
            valorI *= 0.5
            divMostrar.innerHTML=`Valor da passagem escolhida: ${valorI}`
        } else if(passageiro == "1" && passagem == "1"){
            divMostrar.innerHTML=`Valor da passagem escolhida: ${valorP}`
        } else if(passageiro =="1" && passagem == "2" ){
            divMostrar.innerHTML=`Valor da passagem escolhida: ${valorI}`
        }
    }

