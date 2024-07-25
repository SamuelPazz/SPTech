

    function comprar(){
        var passagens = Number(iptPassagens.value);
        var valorPassagem = 4.40;
        // var total = passagens * valorPassagem;

        if(passagens >=8 && passagens <=50){
            if(passagens >=8 && passagens<=19){
                valorPassagem *= 0.97
            }
            if(passagens >=20 && passagens <=49){
                valorPassagem *= 0.95
            }
            if(passagens ==50){
                valorPassagem *= 0.93
            }
            var total = passagens * valorPassagem;
            divMostrar.innerHTML=`Total a pagar ${total}`
        } else alert(`Quantidade inválida para o Fidelidade!`)
    }

