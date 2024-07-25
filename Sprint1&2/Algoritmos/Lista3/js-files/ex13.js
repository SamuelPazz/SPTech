
    var valorP = 0;
    var viagens = 0;
    var km = 0;

    

    function gastos(){
        valorP = Number(inputVP.value);
        viagens = Number(inputVM.value);
        km = Number(inputKM.value);

        var valorkm = km * 0.75;
        var viagensUber = viagens * 0.10;
        var viagensOnibus = viagens * 0.90;

        viagensUber = Number(viagensUber * valorkm);
        viagensOnibus = Number(viagensOnibus * valorP);

        var total = viagensUber + viagensOnibus;
        divMostrar.innerHTML =`Você vai gastar ${total} por mês com transporte`

    }



