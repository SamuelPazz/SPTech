

    function iniciar(){
        var voltas = inputVoltas.value;
        var texto = ``;
        for(var contador = 1; contador <= voltas; contador++){
            texto += `Carro dando a ${contador}ª volta<br>`
        } divMostrar.innerHTML=`${texto}Corrida finalizada!`
    }

