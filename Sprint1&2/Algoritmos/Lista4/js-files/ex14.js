
    var total = 0;

    function calcCorrida() {
        var nome = inputNome.value;
        var km = Number(inputViagem.value);
        var bandeira = Number(inputBandeira.value);
        var hr = Number(inputHora.value);

        var total = km * 1.25;

        if (bandeira == 1) {
            if (hr >= 0) {
                if(hr <=6){
                    total += total * 0.05
                }
            }
            if (hr >= 7) {
                if(hr <=12){
                    total += total * 0.10
                }
            }
            if (hr >= 13) {
                if(hr <=23){
                    total += total * 0.15
                }
            }
            divExibir.innerHTML += `Olá ${nome} Sua corrida, será na bandeira ${bandeira}, percorrerá ${km} km e o total da corrida será de ${total}<br>`
        }

        if (bandeira == 2) {
            if (hr >= 0) {
                if(hr <=6){
                    total += total * 0.10
                }
            }
            if (hr >= 7) {
                if(hr <=12){
                    total += total * 0.20
                }
            }
            if (hr >= 13) {
                if(hr <=23){                    
                    total += total * 0.30
                }
            }
            divExibir.innerHTML += `Olá ${nome} Sua corrida, será na bandeira ${bandeira}, percorrerá ${km} km e o total da corrida será de ${total}<br>`
        }
        if (bandeira == 3) {
            if (hr >= 0) {
                if(hr <=6){
                    total += total * 0.15
                }
            }
            if (hr >= 7) {
                if(hr <=12){
                    total += total * 0.30
                }
            }
            if (hr >= 13) {
                if(hr <=23){
                    total += total * 0.45
                }
            }
            divExibir.innerHTML += `Olá ${nome} Sua corrida, será na bandeira ${bandeira}, percorrerá ${km} km e o total da corrida será de ${total}<br>`
        }
    }

