
    var texto = ``;
    function gerar(){
        var num = Number(iptQTD.value);
        for(var contador = 1; contador <= num; contador++){
            var aleatorio = Math.random()
            if(aleatorio >=0.5){
                texto += `${aleatorio} - metade SUPERIOR<br>`
            } else {
                texto += `${aleatorio} - metade INFERIOR<br>`
            }
        } divMostrar.innerHTML += `${texto}<br>`
    }

