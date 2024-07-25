
    var texto = ``;
    function gerar(){
        var num = Number(iptQTD.value);
        var contadorabaixo = 0;
        for(var contador = 1; contador <= num; contador++){
            var aleatorio = Math.random()
            if(aleatorio >=0.5){
                texto += `${aleatorio} - metade SUPERIOR<br>`
            } else {
                contadorabaixo ++;
                texto += `${aleatorio} - metade INFERIOR<br>`
            }
        } divMostrar.innerHTML += `${texto}<br>TOTAL DE NÚMEROS SORTEADOS ABAIXO DA METADE: ${contadorabaixo}<br>`
    }

