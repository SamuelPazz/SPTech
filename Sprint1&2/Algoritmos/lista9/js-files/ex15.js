
    var texto = ``;
    function contar(){
        var qtdpessoas = inputQTD.value;

        
        for(var contador = 1; contador <= qtdpessoas; contador++){
            
            if(contador == 1){
                texto += `<br>Entrou o ${contador}º passageiro (que é o(a) motorista)`
            } else if (contador >=6){
                texto += `<br>O ${contador}º passageiro terá que esperar!`
            } else {
                texto += `<br>Entrou o ${contador}º passageiro`
            }
        } divMostrar.innerHTML = `${texto}`
    }

