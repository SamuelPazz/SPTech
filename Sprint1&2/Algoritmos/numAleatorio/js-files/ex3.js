
    var texto = ``;
    function gerar(){
        var num = Number(iptQTD.value);
        var contadorabaixo = 0;
        var contadoracima = 0;
        var total = 0;
        var menornumero = 1;
        var maiornumero = 0;

        for(var contador = 1; contador <= num; contador++){
            var aleatorio = Math.random()
            total += aleatorio;
            
            if(aleatorio >=0.5){
                contadoracima ++;
                texto += `<br>${aleatorio} - metade SUPERIOR`
            } else {
                contadorabaixo ++;
                texto += `<br>${aleatorio} - metade INFERIOR`
            }

            if (aleatorio > maiornumero){
                maiornumero = aleatorio
                texto += ``
            } 
            if (aleatorio < menornumero){
                menornumero = aleatorio
                texto += ``
            }
        } 
        
        texto += `<br>TOTAL DE NÚMEROS SORTEADOS ACIMA DA METADE:${contadoracima}<br>TOTAL DE NÚMEROS SORTEADOS ABAIXO DA METADE: ${contadorabaixo}<br>`

        var media = total / num;
        
        divMostrar.innerHTML += `<br>${texto}<br>MÉDIA DE NÚMEROS SORTEADOS: ${media}<br>`
        texto = ``
    }

