

    function analisarE(){
        var empresa = inputEmpresa.value;
        var bolsa = Number(inputBolsa.value);
        var vr = Number(inputVr.value);
        var tempo = Number(inputTempo.value);
        
        if(bolsa >=1800 || vr >=20 || tempo <=30){
            divMostrar.innerHTML=`A empresa ${empresa} é uma de suas preferências`
        } else divMostrar.innerHTML=`A empresa ${empresa} está fora da sua lista`
    }

