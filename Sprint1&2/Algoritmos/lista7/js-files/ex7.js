
    function calc(){
        var transporte = inputTransporte.value;
        var km = Number(inputKm.value);
        if(km <=10){
            if(transporte == "Carro" || transporte == "Metrô" || transporte == "Ônibus"){
                alert(`Tá thanks...`)
            } else alert(`É... um pouco cansado`)
        } else if(km >10){
            if(transporte == "Carro"){
                alert(`É... um pouco cansado...`)
            } else if(transporte == "Metrô" || transporte == "Ônibus"){
                alert(`Bem cansado`)
            } else if(transporte == "Bicicleta"){
                alert(`Vish... tá só o pó...`)
            }
        }
    }

