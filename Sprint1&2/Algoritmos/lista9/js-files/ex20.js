
    var texto = ``;
    function acompanhar(){
        var qtdDep = inputDep.value;
        var valorDep = Number(inputValor.value);
        var saldo = valorDep - valorDep;

        for(var contador = 1; contador <= qtdDep; contador++){
            var resto = contador % 3;
            if(resto == 0){
                saldo += valorDep
                saldo = saldo * 1.01 
            } else{
                saldo += valorDep
            }
            texto += `<br>${contador}º Mês: R$${saldo}<br>`
        }
        divMostrar.innerHTML = `${texto}<br> Total guardado: R$${saldo}`
    }

