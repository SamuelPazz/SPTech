
    var valor = 0;

    function calcCorrida() {
        var nome = inputNome.value;
        var km = Number(inputViagem.value);
        var bandeira = Number(inputBandeira.value);
        var hr = Number(inputHora.value);

        var valor = km * 1.25;
        var valorBandeira = bandeira * 5;
        var valorHorario = valorBandeira;


        if (hr >= 7) {
            valorHorario = valorBandeira * 2;
        }
        if (hr >= 13) {
            valorHorario = valorBandeira * 3;
        }
        var total = valor * (valorHorario * 0.05);

        divExibir.innerHTML = ``


    }

