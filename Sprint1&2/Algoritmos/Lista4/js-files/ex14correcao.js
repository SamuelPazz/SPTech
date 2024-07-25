
    var valor = 0;

    function calcCorrida() {
        var nome = inputNome.value;
        var km = Number(inputViagem.value);
        var bandeira = Number(inputBandeira.value);
        var hr = Number(inputHora.value);

        var valor = km * 1.25;
        var valorBandeira = bandeira * 5;

        if(hr >=0){
            if(hr <=6){
                var valorHorario = valorBandeira * 1;
            }
        }
        if(hr >=7){
            if(hr <=12){
                var valorHorario = valorBandeira * 2;
            }
        
        }
        if (hr >=13){
            if (hr <=23){
                var valorHorario = valorBandeira * 3;
            }   
        }
        
        var total = valor * (valorHorario * 0.05);

        divExibir.innerHTML=``


    }

