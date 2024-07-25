
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
                texto += `<br>${contador}º Mês: R$${saldo}<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49YKukycsoQV4285qaXY9FSY1FuOJoPm_6P4-BmMHRw&s" width="14px"><br>`
            } else{
                saldo += valorDep
                texto += `<br>${contador}º Mês: R$${saldo}<br>`
            }
        }
        divMostrar.innerHTML = `${texto}<br> Total guardado: R$${saldo}`
    }

